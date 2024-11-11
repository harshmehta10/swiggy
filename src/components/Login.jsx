import React from "react";

const Login = () => {
  const handleClose = () => {};

  return (
    <div className="h-full w-[520px] overflow-y-scroll fixed right-0 top-0 bg-white pl-8 pr-10">
      <div className="pr-10">
        {/* Close button */}
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

        {/* Header section */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <h1 className="font-semibold text-3xl">Login</h1>
            <p className="mt-4">
              or{" "}
              <span className="text-orange-500 font-medium mt-1">
                create an account
              </span>
            </p>
          </div>
          <div>
            <img
              src="https://kpdjwidnbsafeuxfjjhp.supabase.co/storage/v1/object/sign/swiggy_storage_bucket/imagelogin.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzd2lnZ3lfc3RvcmFnZV9idWNrZXQvaW1hZ2Vsb2dpbi5hdmlmIiwiaWF0IjoxNzMxMTc2MDY0LCJleHAiOjQ4ODQ3NzYwNjR9.WZMOD60fjmdnDrrWmjajQcZcCoNwvyJ0wNCUkxMS3wY&t=2024-11-09T18%3A14%3A24.595Z"
              alt="login visual"
              className="h-28 w-28"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="w-10 mt-4 mb-6 border-2 border-black rounded" />

        {/* Input and button section */}
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone number"
            className="border w-full px-4 py-5 text-lg rounded-md"
          />
          <button className="bg-orange-500 text-white w-full py-3 mt-4 rounded-md font-semibold">
            LOGIN
          </button>
          <p className="text-xs font-medium text-gray-500 mt-2">
            By clicking on Login, I accept the{" "}
            <span className="text-black underline">Terms & Conditions</span> &{" "}
            <span className="text-black underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
