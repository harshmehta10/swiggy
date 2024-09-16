import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function Categories() {
  const [categories, setCategories] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mx-auto  max-w-[1200px]">
      <div className="flex items-center justify-between my-3 ">
        <div className="text-2xl font-bold">What's on your mind? </div>
        <div className="flex">
          <div className="flex items-center justify-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="flex items-center justify-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex">
        {/* {categories.map((cat,index) => {
            return (
                <div>
                    <img src={} alt="" />
                </div>
            )
        })} */}
      </div>
    </div>
  );
}

export default Categories;
