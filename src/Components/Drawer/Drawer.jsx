import {
  FaAward,
  FaHome,
  FaList,
  FaSearch,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiLaurelsTrophy } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import { BsList } from "react-icons/bs";
import useUser from "../../Hook/useUser";

const Drawer = () => {
  const [users] = useUser();
  const role = users.role;
  return (
    <div className='bg-[#2A1E43] '>
      <div className='drawer z-10 lg:drawer-open '>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-start justify-start w-full'>
          {/* Page content here */}
          <label htmlFor='my-drawer-2' className='btn  btn-ghost lg:hidden'>
            <BsList />
          </label>
        </div>
        <div className='drawer-side '>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80  text-white space-y-3'>
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
              <NavLink to={"/allContest"} className='flex gap-2 items-center'>
                <FaSearch size={26} />
                All Contest
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
