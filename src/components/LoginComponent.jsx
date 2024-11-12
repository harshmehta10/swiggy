import React, { useState } from "react";

const LoginComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open and close handlers
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Button to open the login/signup panel */}
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-orange-500 text-white rounded-md"
      ></button>

      {/* Sliding Panel */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-end bg-black bg-opacity-30">
          <div className="h-full w-[400px] overflow-y-auto bg-white p-8 shadow-lg">
            {/* Close button */}
            <div className="flex justify-end">
              <button onClick={handleClose} className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Signup Form Content */}
            <h2 className="text-3xl font-semibold mb-2">Sign up</h2>
            <p className="text-gray-500 mb-6">
              or{" "}
              <a href="#" className="text-orange-500">
                login to your account
              </a>
            </p>
            <hr className="mb-6" />

            {/* Form Fields */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
              />
              <a href="#" className="text-blue-500 text-sm">
                Have a referral code?
              </a>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 font-semibold"
              >
                CONTINUE
              </button>
              <p className="text-xs text-gray-500 mt-4">
                By creating an account, I accept the{" "}
                <a href="#" className="text-blue-500">
                  Terms & Conditions
                </a>{" "}
                &{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
