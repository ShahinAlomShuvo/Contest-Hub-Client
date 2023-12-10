import { Link } from "react-router-dom";

const NavEnd = ({ user, logOut, role }) => {
  return (
    <>
      <div className='navbar-end space-x-4'>
        {
          <div className={`drawer drawer-end  ${user ? "block" : "hidden"}`}>
            <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content'>
              <label
                htmlFor='my-drawer-4'
                className='avatar hover:cursor-pointer'
              >
                <div className='w-9 md:w-11 rounded-full'>
                  <img
                    id='user-avatar'
                    src={user && user.photoURL}
                    alt='User Avatar'
                  />
                </div>
              </label>
            </div>

            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-4'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <div className='menu p-4 w-80 min-h-full bg-[#001E2B] text-base-content space-y-2 z-10'>
                {role === "user" ? (
                  <Link to={"/dashboard/userProfile"}>
                    <button className='btn btn-block btn-sm btn-neutral'>
                      {user && user.displayName}
                    </button>
                  </Link>
                ) : (
                  <button className='btn btn-block btn-sm btn-neutral'>
                    {user && user.displayName}
                  </button>
                )}

                {role === "admin" && (
                  <Link to={"/dashboard/manageUsers"}>
                    <button className='btn btn-block btn-sm btn-neutral'>
                      Dashboard
                    </button>
                  </Link>
                )}

                {role === "creator" && (
                  <Link to={"/dashboard/myCreatedContest"}>
                    <button className='btn btn-block btn-sm btn-neutral'>
                      Dashboard
                    </button>
                  </Link>
                )}
                {role === "user" && (
                  <Link to={"/dashboard/winningContest"}>
                    <button className='btn btn-block btn-sm btn-neutral'>
                      Dashboard
                    </button>
                  </Link>
                )}

                <button className='btn btn-sm btn-neutral' onClick={logOut}>
                  Log out
                </button>
              </div>
            </div>
          </div>
        }

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
    </>
  );
};

export default NavEnd;
