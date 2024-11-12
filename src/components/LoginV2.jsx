import React, { useState } from "react";
import { motion } from "framer-motion";

const LoginV2 = ({ handleClose }) => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const toggleShowCreateAccount = () => {
    setShowCreateAccount((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-20">
      <div className="relative w-full h-full">
        {/* Login Panel */}
        <motion.div
          className={`absolute right-0 top-0 bottom-0 w-[520px] h-full bg-white pl-8 pr-10 z-50`}
          initial={{ translateX: "100%" }}
          animate={{ translateX: "0%" }}
          exit={{ translateX: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {showCreateAccount ? (
            <div className="pr-10">
              <div className="mt-5 cursor-pointer" onClick={handleClose}>
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
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <h1 className="font-semibold text-3xl">Sign up</h1>
                  <p className="mt-4">
                    or{" "}
                    <span className="text-orange-500 font-medium mt-1">
                      <button onClick={toggleShowCreateAccount}>
                        login to your account
                      </button>
                    </span>
                  </p>
                </div>
                <div>
                  <img
                    src="https://kpdjwidnbsafeuxfjjhp.supabase.co/storage/v1/object/sign/swiggy_storage_bucket/imagelogin.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzd2lnZ3lfc3RvcmFnZV9idWNrZXQvaW1hZ2Vsb2dpbi5hdmlmIiwiaWF0IjoxNzMxMzE1ODg5LCJleHAiOjQ4ODQ5MTU4ODl9.CogBynLzdSWQ1DfOckj2FPnXaVRtYTEwxHh-tHv1umE&t=2024-11-11T09%3A04%3A49.652Z"
                    alt="signup visual"
                    className="h-28 w-28"
                  />
                </div>
              </div>

              <hr className="w-10 mt-4 mb-6 border-2 border-black rounded" />

              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border w-full px-4 py-5 text-lg rounded-md"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border w-full px-4 py-5 text-lg rounded-md mt-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border w-full px-4 py-5 text-lg rounded-md mt-4"
                />
                <button className="bg-orange-500 text-white w-full py-3 mt-4 rounded-md font-semibold">
                  CONTINUE
                </button>
              </div>
            </div>
          ) : (
            <div className="pr-10">
              <div className="mt-5 cursor-pointer" onClick={handleClose}>
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
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <h1 className="font-semibold text-3xl">Login</h1>
                  <p className="mt-4">
                    or{" "}
                    <span className="text-orange-500 font-medium mt-1">
                      <button onClick={toggleShowCreateAccount}>
                        create an account
                      </button>
                    </span>
                  </p>
                </div>
                <div>
                  <img
                    src="https://kpdjwidnbsafeuxfjjhp.supabase.co/storage/v1/object/sign/swiggy_storage_bucket/imagelogin.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzd2lnZ3lfc3RvcmFnZV9idWNrZXQvaW1hZ2Vsb2dpbi5hdmlmIiwiaWF0IjoxNzMxMzE1ODg5LCJleHAiOjQ4ODQ5MTU4ODl9.CogBynLzdSWQ1DfOckj2FPnXaVRtYTEwxHh-tHv1umE&t=2024-11-11T09%3A04%3A49.652Z"
                    alt="login visual"
                    className="h-28 w-28"
                  />
                </div>
              </div>

              <hr className="w-10 mt-4 mb-6 border-2 border-black rounded" />

              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border w-full px-4 py-5 text-lg rounded-md"
                />
                <button className="bg-orange-500 text-white w-full py-3 mt-4 rounded-md font-semibold">
                  LOGIN
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LoginV2;
