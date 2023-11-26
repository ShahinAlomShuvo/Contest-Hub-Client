import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const useContest = () => {
  const axiosPublic = useAxiosPublic();

  const {
    isPending,
    refetch,
    data: contest = [],
  } = useQuery({
    queryKey: ["contest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contest");
      return res.data;
    },
  });

  return [contest, isPending, refetch];
};

export default useContest;
