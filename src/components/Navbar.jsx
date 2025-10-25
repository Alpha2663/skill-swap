import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { PiSwapFill } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
      {user && <li><NavLink to="/profile" onClick={() => setIsMenuOpen(false)}>My Profile</NavLink></li>}
    </>
  );

  return (
    <nav className="bg-amber-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex text-4xl font-bold text-yellow-600">SkillSwap <PiSwapFill /></Link>
        <ul className="hidden md:flex gap-6 items-center font-medium text-gray-700">
          {links}
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL || "https://i.ibb.co/2P2Q0Pn/avatar.png"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border"
                />
                <span className="absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100">
                  {user.displayName || "User"}
                </span>
              </div>
              <button
                onClick={logout}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <NavLink
                to="/login"
                className="border px-3 py-1 rounded hover:bg-yellow-50"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Signup
              </NavLink>
            </div>
          )}
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-amber-50">
          <ul className="flex flex-col items-center gap-4 p-4 font-medium text-gray-700">
            {links}
            {user ? (
              <>
                <div className="relative group">
                  <img
                    src={user.photoURL || "https://i.ibb.co/2P2Q0Pn/avatar.png"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border"
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-sm bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100">
                    {user.displayName || "User"}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="border px-3 py-1 rounded hover:bg-yellow-50 text-center"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-center"
                >
                  Signup
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

