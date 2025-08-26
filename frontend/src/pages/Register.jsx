import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", {
        fullName: {
          firstName: formData.firstName,
          lastName: formData.lastName
        },
        email: formData.email,
        password: formData.password
      });
      // TODO: handle successful registration (redirect to login)
      toast.success("Registration Successful");
      navigate("/login");
    } catch (err) {
      toast.error("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e7ff] to-[#f0abfc] dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-bl from-purple-400 via-pink-300 to-blue-400 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
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
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 tracking-wider">Create Account</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Join our AI chat community</p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
            {/* <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-pink-300 focus:outline-none transition"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div> */}
            {/* {error && <div className="text-red-500 text-xs text-center -mt-2">{error}</div>} */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-xl font-bold shadow-lg hover:from-purple-600 hover:to-pink-500 transition text-lg disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">Already have an account? <a href="/login" className="text-pink-400 hover:underline">Sign in</a></div>
      </div>
    </div>
  );
};

export default Register;