"use client"

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginBox = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login attempt with:", formData);
    };

    return (
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl w-full max-w-[600px] min-h-[600px] flex flex-col justify-center">
            <div className="mb-8 sm:mb-10 md:mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                    Book Hub
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 font-light">
                    Welcome back! Please login to your account.
                </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="block text-base sm:text-lg font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-base bg-white/80 placeholder:text-gray-400 placeholder:pl-1 transition-all duration-200 h-12"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="password"
                        className="block text-base sm:text-lg font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 text-base bg-white/80 placeholder:text-gray-400 placeholder:pl-1 transition-all duration-200 h-12"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-all duration-200"
                        />
                        <label
                            htmlFor="remember"
                            className="ml-3 block text-sm sm:text-base text-gray-600"
                        >
                            Remember me
                        </label>
                    </div>
                    <a
                        href="#"
                        className="text-sm sm:text-base text-purple-600 hover:text-purple-500 font-medium transition-colors duration-200"
                    >
                        Forgot password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-medium text-base sm:text-lg mt-4 h-12"
                >
                    Sign In
                </button>

                <div className="relative my-4 sm:my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-white text-gray-500 text-sm">
                            Or continue with
                        </span>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-200 text-base sm:text-lg h-12"
                >
                    <FcGoogle className="text-xl sm:text-2xl" />
                    Sign in with Google
                </button>
            </form>

            <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-gray-600">
                Don't have an account?{" "}
                <a
                    href="#"
                    className="text-purple-600 hover:text-purple-500 font-medium transition-colors duration-200"
                >
                    Sign up
                </a>
            </p>
        </div>
    );
};

export default LoginBox;