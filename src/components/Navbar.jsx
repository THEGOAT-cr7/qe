import React from "react";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useSelector } from "react-redux";

function Navbar() {
  const { isPending, logout } = useLogout();
  const { user } = useSelector((store) => store.user);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          MyWebsite
        </h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <img
                src={user.photoURL || "https://picsum.photos/50"}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <h1 className="text-sm font-medium">{user.displayName}</h1>
              <button
                onClick={logout}
                disabled={isPending}
                className={`${
                  isPending
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                } px-3 py-1 rounded-md text-sm`}
              >
                {isPending ? "Logging out..." : "Logout"}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
