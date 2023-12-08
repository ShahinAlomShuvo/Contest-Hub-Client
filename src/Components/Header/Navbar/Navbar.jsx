import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import { FaAward } from "react-icons/fa";
import useUser from "../../../Hook/useUser";
import NavEnd from "./NavEnd";

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
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allContest"}>All Contest</NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"/process"}>Process</NavLink>
      </li>
      <li>
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
          <NavEnd user={user} logOut={logOut} role={role}></NavEnd>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
