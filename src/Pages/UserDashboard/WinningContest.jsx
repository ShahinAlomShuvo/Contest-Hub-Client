import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import WinningContestRow from "./WinningContestRow";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const WinningContest = () => {
  const { width, height } = useWindowSize();

  const { user } = useAuth();
  console.log(user);

  const axiosSecure = useAxiosSecure();

  const { data: singleUserWInningContest = [] } = useQuery({
    queryKey: [user?.email, "singleUserWInningContest"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/single-user-winning-data/${user?.email}`
      );
      return res.data;
    },
  });

  return (
    <>
      <Confetti width={width} height={height} />
      <div>
        <h2 className='text-2xl font-semibold text-center py-6'>
          My Winning Contest
        </h2>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                <th>Image</th>
                <th>Winner</th>
                <th> Prize Money</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {singleUserWInningContest.map((contest) => (
                <WinningContestRow
                  key={contest._id}
                  contest={contest}
                ></WinningContestRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WinningContest;
