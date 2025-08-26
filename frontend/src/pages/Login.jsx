
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(!email || !password) toast.error("Email and password are required");
    if(password && password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email: email, password: password },
        { withCredentials: true }
      );
      toast.success("Login Successful");
      navigate("/");
    } catch (err) {
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#f0abfc] dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated accent blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-purple-400 via-pink-300 to-blue-400 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-2xl p-10 border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center mb-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
              <circle cx="24" cy="24" r="24" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a78bfa" />
                  <stop offset="1" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight">Welcome Back</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Sign in to your AI chat account</p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                // required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Password</label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
                placeholder="*******"
                value={password}
                onChange={e => setPassword(e.target.value)}
                // required
                minLength={6}
              />
            </div>
            {/* {error && <div className="text-red-500 text-xs text-center -mt-4">{error}</div>} */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-xl font-bold shadow-lg hover:from-purple-600 hover:to-pink-500 transition text-lg disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">Not registered? <a href="/register" className="text-pink-400 hover:underline">Create an account</a></div>
      </div>
    </div>
  );
};

export default Login;
