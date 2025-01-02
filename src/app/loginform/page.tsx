"use client";
import { useState } from "react";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

      {/* Email Input */}
      <div className="relative mb-4">
        <AiOutlineMail className="absolute left-3 top-3 text-gray-500" size={20} />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password Input */}
      <div className="relative mb-4">
        <AiOutlineLock className="absolute left-3 top-3 text-gray-500" size={20} />
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-3 text-gray-500"
        >
          {passwordVisible ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
        </button>
      </div>

      {/* Forgot Password */}
      <div className="text-right mb-4">
        <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        Login
      </button>

      {/* Sign Up Link */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up with email
          </a>
        </p>
      </div>
    </div>
  );
}
