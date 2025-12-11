import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          bg-clip-text text-transparent 
          hover:opacity-90 transition-opacity duration-300"
        >
          Udemy
          <span
            className="font-light ml-1 
          bg-gradient-to-r from-pink-500 to-yellow-400 
          bg-clip-text text-transparent"
          >
            Clone
          </span>
        </Link>

        
        <div className="flex items-center gap-6">
          
          {user && (
            <Link
              to="/courses"
              className="text-xl font-semibold px-4 py-2 rounded-full text-white hover:bg-white/10 hover:text-yellow-400 transition-all duration-300"
            >
              Courses
            </Link>
          )}

      
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 hover:shadow-red-500/40 transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            
            <Link
              to="/login"
              className="px-6 py-2 text-sm font-medium text-black 
              bg-white rounded-md 
              hover:bg-gray-100 
              transition-all duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
