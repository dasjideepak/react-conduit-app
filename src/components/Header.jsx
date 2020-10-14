import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

function Header(props) {
  const { addToast } = useToasts();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    props.setIsLogged(false);
    props.history.push("/");
    addToast("Logout Successfull", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  return (
    <header className="text-white body-font bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">Conduit</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className="mr-5 hover:text-gray-400">
            Home
          </NavLink>
          {props.isLogged ? (
            <>
              <NavLink to="/create" className="mr-5 hover:text-gray-400">
                Create New Article
              </NavLink>
              <NavLink to="/user/update" className="mr-5 hover:text-gray-400">
                Setting
              </NavLink>
              <button
                className="mr-5 hover:text-gray-400"
                onClick={(e) => handleLogout(e)}
              >
                Logout
              </button>
              <img
                src="https://avatars2.githubusercontent.com/u/38307844?s=460&u=f545a10c52359525a21efe75562a272f241ab57d&v=4"
                alt="user-avatar"
                width="40px"
                className="border-2 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <>
              <NavLink
                to="/signup"
                className="transition duration-500 ease-in-out px-8 py-2 rounded-md text-md font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-500 transition duration-150 ease-in-out hover:bg-indigo-600"
              >
                Signup
              </NavLink>
              <NavLink
                to="/login"
                className="transition duration-500 ease-in-out px-8 py-2 rounded-md text-md font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-500 transition duration-150 ease-in-out ml-4 hover:bg-indigo-600"
              >
                Login
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Header);
