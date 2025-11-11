import React from "react";
import logo from "../../assets/images/logo1.png";
import { Mail, Lock, Facebook, Chrome } from "lucide-react";

const Login = () => {
  return (
    <>
      <section className="bg-[#ff66008a]">
        <div className="flex min-h-screen">
          {/* Left Side Panel */}
          <div className="hidden md:flex w-1/3 bg-black text-white flex-col justify-center items-start p-16 m-6 rounded-lg">
            <h1 className="text-5xl font-bold mb-4">
              Path<span className="text-[#ff6600]">AI</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Get access to intelligent solutions and insights that simplify
              complexity — designed for humans, not just experts.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-20">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Login to your account
              </h2>
              <p className="text-gray-500 mb-6">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="text-[#ff6600] hover:underline font-semibold"
                >
                  Sign Up
                </a>
              </p>

              {/* Google & Facebook Login */}
              <div className="flex flex-col gap-3 mb-6">
                <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
                  <Chrome className="w-5 h-5 text-[#DB4437]" />
                  <span>Sign in with Google</span>
                </button>

                <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
                  <Facebook className="w-5 h-5 text-[#1877F2]" />
                  <span>Sign in with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Email & Password Fields */}
              <form className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-700 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 text-sm font-medium">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-[#ff6600] text-sm hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="h-4 w-4" />
                  <label htmlFor="remember" className="text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-black text-white py-2 rounded-lg font-semibold hover:bg-[#ff6600] transition-all duration-300"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
