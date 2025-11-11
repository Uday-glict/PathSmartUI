import React, { useState } from "react";

const SignupStep1 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    userCount: "",
    roles: [],
    platform: "",
  });

  const rolesList = ["Admin", "Developer", "Analyst", "Manager", "Tester"];
  const platforms = ["Web", "Mobile", "Both"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => {
      const roles = prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role];
      return { ...prev, roles };
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side panel */}
      <div className="hidden md:flex w-1/2 bg-black text-white flex-col justify-center items-start p-16">
        <h1 className="text-5xl font-bold mb-4">
          Path<span className="text-[#ff6600]">AI</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          Create your account and start building intelligent workflows with
          PathAI’s powerful automation suite.
        </p>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create your account
          </h2>
          <p className="text-gray-500 mb-6">
            Already have an account?{" "}
            <a
              href="#"
              className="text-[#ff6600] hover:underline font-semibold"
            >
              Login
            </a>
          </p>

          <div className="flex items-center gap-2 mb-6">
            <div
              className={`flex-1 h-1 rounded-full ${
                step >= 1 ? "bg-[#ff6600]" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`flex-1 h-1 rounded-full ${
                step >= 2 ? "bg-[#ff6600]" : "bg-gray-300"
              }`}
            ></div>
          </div>

          {/* Step 1 - Basic Info */}
          {step === 1 && (
            <form onSubmit={handleNext} className="flex flex-col gap-4">
              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 rounded-lg font-semibold hover:bg-[#ff6600] transition-all duration-300"
              >
                Next →
              </button>
            </form>
          )}

          {/* Step 2 - Organization Info */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Enter organization name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">
                  User Count
                </label>
                <input
                  type="number"
                  name="userCount"
                  value={formData.userCount}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#ff6600]"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Roles / Modules
                </label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {rolesList.map((role) => (
                    <button
                      type="button"
                      key={role}
                      onClick={() => handleRoleChange(role)}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        formData.roles.includes(role)
                          ? "bg-[#ff6600] text-white border-[#ff6600]"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Platform
                </label>
                <div className="flex gap-3 mt-2">
                  {platforms.map((p) => (
                    <label key={p} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="platform"
                        value={p}
                        checked={formData.platform === p}
                        onChange={handleChange}
                        className="accent-[#ff6600]"
                      />
                      {p}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="border border-gray-400 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-100 transition"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="bg-black text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#ff6600] transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default SignupStep1;
