import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { api } from "../../store/api";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await api.login(email, password);
      console.log("Login successful:", data);

      if (data.access) {
        localStorage.setItem("access_token", data.access);
      }
      if (data.refresh) {
        localStorage.setItem("refresh_token", data.refresh);
      }

      localStorage.setItem("token", data.access);

      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Incorrect email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-md bg-white rounded-3xl shadow-2xl px-9 py-10 text-center">
        <img src={logo} className="w-20 h-20 rounded-full" alt="" />

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Coffee CRM
        </h1>
        <p className="text-sm font-semibold text-gray-500 mb-5">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          {/* Email */}
          <div className="mb-5 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 disabled:opacity-70 transition-all duration-300 mb-4 cursor-pointer"
          >
            {loading ? "Entering..." : "Sign in"}
          </button>
        </form>

        <div className="text-sm">
          <a
            href="/signup"
            className="text-gray-500 font-medium hover:text-gray-700 transition-color duration-300 cursor-pointer"
          >
            Need an account? <strong className="font-semibold">Sign up</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
