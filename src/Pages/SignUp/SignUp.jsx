import React, { useState } from "react";
import { Mail, Lock, ArrowLeft, User } from "lucide-react";
import { api } from "../../store/api";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      const data = await api.register({
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        password: formData.password,
      });

      console.log("Ro'yxatdan o'tish muvaffaqiyatli:", data);
      navigate("/signin");
    } catch (err) {
      setError(err.message || "An error occurred while registering.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-8 py-10">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-3 transition-colors cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to sign in</span>
        </button>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-5">
          Create your account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
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
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
              <input
                type="text"
                name="first_name"
                placeholder="John"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Doe"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          <div className="text-left">
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
                name="password"
                placeholder="Min. 8 characters"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={8}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-slate-900 text-white text-lg font-medium rounded-2xl hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
