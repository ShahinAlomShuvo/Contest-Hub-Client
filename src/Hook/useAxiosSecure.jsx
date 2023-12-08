import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://contest-hub-server-iota.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const status = err.response.status;
      console.log("from interceptor", status);

      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/signin");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
