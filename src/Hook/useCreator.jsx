import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCreator = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isPending, data: isCreator } = useQuery({
    queryKey: [user?.email, "isCreator"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/creator/${user?.email}`);

      return res.data.admin;
    },
  });
  return [isCreator, isPending];
};

export default useCreator;
