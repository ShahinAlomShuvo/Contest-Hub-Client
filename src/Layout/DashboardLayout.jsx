import {
  FaAward,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GiLaurelsTrophy } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import useUser from "../Hook/useUser";

const DashboardLayout = () => {
  const [users] = useUser();
  const role = users.role;
  console.log(role);

  return (
    <div className='grid grid-cols-4 min-h-screen  '>
      <div className='p-10 bg-[#4B4436]'>
        <ul className='space-y-4 text-white'>
          {/* admin routes  */}
          {role === "admin" && (
            <>
              <li>
                <NavLink
                  to={"/dashboard/manageUsers"}
                  className='flex gap-2 items-center'
                >
                  <FaUsers size={26} />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manageContest"}
                  className='flex gap-2 items-center'
                >
                  <FaList size={26} />
                  Manage Contest
                </NavLink>
              </li>
            </>
          )}
          {/* creator routes */}
          {role === "creator" && (
            <>
              <li>
                <NavLink
                  to={"/dashboard/addContest"}
                  className='flex gap-2 items-center'
                >
                  <FaTrophy size={26}></FaTrophy>
                  Add Contest
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/myCreatedContest"}
                  className='flex gap-2 items-center'
                >
                  <GiLaurelsTrophy size={26} />
                  My Created Contest
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/contestSubmission"}
                  className='flex gap-2 items-center'
                >
                  <FaAward size={26}></FaAward>
                  Contest Submission
                </NavLink>
              </li>
            </>
          )}
          {/* user routes */}
          {role === "user" && (
            <>
              <li>
                <NavLink
                  to={"/dashboard/participatedContest"}
                  className='flex gap-2 items-center'
                >
                  <FaTrophy size={26}></FaTrophy>
                  My Participated Contest
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/winningContest"}
                  className='flex gap-2 items-center'
                >
                  <FaAward size={26}></FaAward>
                  My Winning Contest
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/userProfile"}
                  className='flex gap-2 items-center'
                >
                  <CgProfile size={26} />
                  My Profile
                </NavLink>
              </li>
            </>
          )}

          {/* shared links  */}
          <div className='border border-white'></div>
          <li>
            <NavLink to={"/"} className='flex gap-2 items-center'>
              <FaHome size={26} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"} className='flex gap-2 items-center'>
              <FaSearch size={26} />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className='flex gap-2 items-center'>
              <FaEnvelope size={26} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='col-span-3 bg-slate-400 p-10 '>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
