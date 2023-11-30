import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import { FaAward } from "react-icons/fa";
import useUser from "../../../Hook/useUser";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [users] = useUser();
  const role = users?.role;

  const logOut = async () => {
    try {
      const res = await logOutUser();
      Swal.fire({
        title: "Congratulation!",
        text: "Login Successful!",
        icon: "success",
      });
      console.log(res);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
      });
      console.log(err);
    }
  };

  const navLinks = (
    <>
      <li className=' font-semibold'>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className=' font-semibold text-gray-600 lg:text-white'>
        <NavLink to={"/allContest"}>All Contest</NavLink>
      </li>
      <li className=' font-semibold'>
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li className=' font-semibold'>
        <NavLink to={"/process"}>Process</NavLink>
      </li>
      <li className=' font-semibold'>
        <NavLink to={"/leader-board"}>Leader Board</NavLink>
      </li>
    </>
  );
  return (
    <div className='bg-[#4B4436] text-white'>
      <nav className='navbar container mx-auto '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 '
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className='flex items-center gap-2'>
            <FaAward size={30}></FaAward>
            <h2 className='  text-2xl md:text-3xl font-bold'>ContestHub</h2>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end space-x-4'>
          {/* nav end content  */}

          <div className={`dropdown dropdown-end ${user ? "block" : "hidden"}`}>
            <div tabIndex={0} className='avatar hover:cursor-pointer'>
              <div className='w-9 md:w-11 rounded-full'>
                <img src={user && user.photoURL} alt='User Avatar' />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2 '
            >
              <li className='pl-2 font-semibold text-lg text-gray-800'>
                {user && user.displayName}
              </li>
              <li className='bg-base-200 rounded-md text-gray-950'>
                {role === "admin" && (
                  <Link to={"/dashboard/manageUsers"}>Dashboard</Link>
                )}
                {role === "creator" && (
                  <Link to={"/dashboard/myCreatedContest"}>Dashboard</Link>
                )}
                {role === "user" && (
                  <Link to={"/dashboard/userProfile"}>Dashboard</Link>
                )}
              </li>

              <li className='btn btn-sm' onClick={logOut}>
                Log out
              </li>
            </ul>
          </div>
          <div>
            {user ? null : (
              <Link
                to={"/signIn"}
                className='btn bg-[#4B4436] text-white btn-outline '
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
