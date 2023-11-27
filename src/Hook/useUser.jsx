import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();

  const {
    isPending,
    refetch,
    data: users = [],
  } = useQuery({
    queryKey: [user?.email, "users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  return [users, isPending, refetch];
};

export default useUser;
