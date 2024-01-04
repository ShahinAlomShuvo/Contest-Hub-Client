import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { FadeLoader } from "react-spinners";
import ContestDeadline from "./ContestDeadline";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TableRow from "./TableRow";

const ParticipateContest = () => {
  const [contests, setContests] = useState([]);
  const [sorting, setSorting] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { isPending, data: registerContest = [] } = useQuery({
    queryKey: [user?.email, "singleCreatorContest"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        encodeURI(`/singleCreatorContest/${user?.email}`)
      );

      return res.data;
    },
  });

  //   implement sorting
  useEffect(() => {
    if (registerContest) {
      const upcoming = registerContest.filter(
        (c) => new Date(c.deadline).getTime() > new Date().getTime()
      );

      const expired = registerContest.filter(
        (c) => new Date(c.deadline).getTime() <= new Date().getTime()
      );

      const sortUpcoming = upcoming.sort((a, b) =>
        sorting
          ? new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
          : new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
      );

      setContests([...sortUpcoming, ...expired]);
    }
  }, [registerContest, sorting]);

  return (
    <>
      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr className='text-2xl text-white  bg-[#2A1E43]    h-20 '>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>
                    Deadline
                    {
                      <button
                        onClick={() => setSorting(!sorting)}
                        className='btn btn-ghost'
                      >
                        {sorting ? <IoIosArrowDown /> : <IoIosArrowUp />}
                      </button>
                    }
                  </th>
                  <th>Participate</th>
                </tr>
              </thead>
              <tbody>
                {contests.map((contest, idx) => (
                  <TableRow
                    key={contest._id}
                    contest={contest}
                    idx={idx}
                  ></TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ParticipateContest;
