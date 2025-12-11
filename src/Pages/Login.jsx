import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@test.com" && password === "123456") {
      login(email);
      navigate("/courses");
    } else {
      setError("Invalid credentials! Use: test@test.com / 123456");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">
      
      {/* ✅ Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6"
      >
        {/* ✅ Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h2>
          <p className="text-sm text-gray-500">
            Login to access your courses
          </p>
        </div>

        {/* ✅ Error Message */}
        {error && (
          <p className="mb-3 text-sm text-red-500 text-center bg-red-100 py-1 rounded">
            {error}
          </p>
        )}

        {/* ✅ Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="test@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* ✅ Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
          >
            Login
          </motion.button>
        </form>

        {/* ✅ Dummy Hint */}
        <p className="mt-4 text-xs text-center text-gray-500">
          New to Udemy Clone ? <br />
          <span className="font-semibold text-gray-700">
            Create an account 
          </span>
        </p>
      </motion.div>
    </div>
  );
}

