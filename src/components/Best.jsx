import React from "react";

const Best = () => {
  return (
    <div className="mt-6">
      <div className="mx-4 md:mx-10 lg:mx-32">
        <h1 className="font-gilroy-extraBold text-lg md:text-xl lg:text-2xl font-semibold">
          Best Places to Eat Across Cities
        </h1>
        <div className="my-3">
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Bangalore
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Pune
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Mumbai
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Delhi
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Hyderabad
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Kolkata
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Chennai
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Chandigarh
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Ahmedabad
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Jaipur
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Best Restaurants in Nagpur
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Show More
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-4 md:mx-10 lg:mx-32">
        <h1 className="font-gilroy-extraBold text-lg md:text-xl lg:text-2xl font-semibold my-2">
          Best Cuisines Near Me
        </h1>
        <div>
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Chinese Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              South Indian Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Indian Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Kerala Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Korean Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              North Indian Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Seafood Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Bengali Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Punjabi Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Italian Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Andhra Restaurant Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Show More
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-4 md:mx-10 lg:mx-32">
        <h1 className="font-gilroy-extraBold text-lg md:text-xl lg:text-2xl font-semibold my-3">
          Explore Every Restaurants Near Me
        </h1>
        <div>
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Explore Restaurants Near Me
            </li>
            <li className="border rounded-xl px-2 py-2 cursor-pointer">
              Explore Top Rated Restaurants Near Me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Best;
