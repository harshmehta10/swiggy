import React, { useEffect, useRef, useState } from "react";
import burgerking from "../assets/burgerking.avif";
import Chaayos from "../assets/Chaayos.avif";
import chinesewok from "../assets/chinesewok.avif";
import DailyKitchen from "../assets/DailyKitchen.avif";
import Dominospizza from "../assets/Dominospizza.avif";
import Donaldpastryshop from "../assets/Donaldpastryshop.avif";
import Dumsafarbiryani from "../assets/Dumsafarbiryani.avif";
import Globicecream from "../assets/Globoicecream.avif";
import KFC from "../assets/KFC.avif";
import kwalitywalls from "../assets/kwalitywalls.avif";
import Lapinopizza from "../assets/Lapinopizza.avif";
import Mcdonald from "../assets/Mcdonald.avif";
import MOJOpizza from "../assets/MOJOpizza.avif";
import NH1 from "../assets/NH1.avif";
import pizzahut from "../assets/pizzahut.avif";
import thebelguim from "../assets/thebelguim.avif";
import Theobama from "../assets/Theobama.avif";
import Wefit from "../assets/Wefit.avif";
import ZAZAMuglaibiryani from "../assets/ZAZAMuglaibiryani.avif";
import Goilabutterchicken from "../assets/Goilabutterchicken.avif";

const Restaurants = () => {
  const foods = [
    {
      id: 1,
      Name: "Pizzahut",
      src: pizzahut,
      rating: "4.4",
      time: "35-40 mins",
    },
    {
      id: 2,
      Name: "ChineseWok",
      src: chinesewok,
      rating: "4.2",
      time: "40-45 mins",
    },
    {
      id: 3,
      Name: "BurgerKing",
      src: burgerking,
      rating: "4.5",
      time: "25-30 mins",
    },
    {
      id: 4,
      Name: "KFC",
      src: KFC,
      rating: "4.4",
      time: "20-25 mins",
    },
    {
      id: 5,
      Name: "Domino's pizza",
      src: Dominospizza,
      rating: "4.5",
      time: "20-25 mins",
    },
    {
      id: 6,
      Name: "The Belgian Waffle Co.",
      src: thebelguim,
      rating: "4.5",
      time: "30-35 mins",
    },
    {
      id: 7,
      Name: "kwality Walls Ice Cream and...",
      src: kwalitywalls,
      rating: "4.3",
      time: "35-40 mins",
    },
    {
      id: 8,
      Name: "Donald Pastry shop",
      src: Donaldpastryshop,
      rating: "4.6",
      time: "10-15 mins",
    },
    {
      id: 9,
      Name: "Theobroma",
      src: Theobama,
      rating: "4.5",
      time: "20-25 mins",
    },
    {
      id: 10,
      Name: "La Pino'z Pizza",
      src: Lapinopizza,
      rating: "4.4",
      time: "20-25 mins",
    },
    {
      id: 11,
      Name: "Mcdonald's",
      src: Mcdonald,
      rating: "4.6",
      time: "20-25 mins",
    },

    {
      id: 12,
      Name: "Wefit",
      src: Wefit,
      rating: "4.6",
      time: "20-30 mins",
    },
    {
      id: 13,
      Name: "Daily Kitchen - Homely Meals",
      src: DailyKitchen,
      rating: "4.3",
      time: "20-30 mins",
    },
    {
      id: 14,
      Name: "NH1 Bowls - Highway To North",
      src: NH1,
      rating: "4.3",
      time: "15-25 mins",
    },
    {
      id: 15,
      Name: "Dum Safar Biryani",
      src: Dumsafarbiryani,
      rating: "4.5",
      time: "30-35 mins",
    },
    {
      id: 16,
      Name: "Goila Butter Chicken",
      src: Goilabutterchicken,
      rating: "4.1",
      time: "35-40 mins",
    },
    {
      id: 17,
      Name: "MOJO Pizza - 2X Toppings",
      src: MOJOpizza,
      rating: "4.5",
      time: "20-30 mins",
    },
    {
      id: 18,
      Name: "ZAZA Muglai Biryani",
      src: ZAZAMuglaibiryani,
      rating: "4.4",
      time: "20-30 mins",
    },
    {
      id: 19,
      Name: "Chaayos Chai+Snacks=Relax",
      src: Chaayos,
      rating: "4.6",
      time: "25-30 mins",
    },
    {
      id: 20,
      Name: "GLOBO Ice Creams Of The...",
      src: Globicecream,
      rating: "4.5",
      time: "10-20 mins",
    },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(menuRef.current.getBoundingClientRect().top <= 0);
      console.log(menuRef.current.getBoundingClientRect());
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-32">
      <div>
        <h1 className="font-gilroy-extraBold text-base sm:text-lg md:text-xl lg:text-2xl font-semibold my-2">
          Restaurants with online food delivery in Noida
        </h1>
      </div>

      <div
        className={`sticky top-0 inset-x-0 z-50 ${
          isSticky
            ? "bg-white shadow-md -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-32"
            : ""
        }`}
        ref={menuRef}
      >
        <ul
          className={`list-none flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-10 mt-6 ${
            isSticky ? "py-3 px-4 sm:px-6 md:px-8 lg:px-10" : ""
          }`}
        >
          {[
            "Filter",
            "Sort By",
            "Fast Delivery",
            "New on Swiggy",
            "Rating 4.0+",
            "Pure Veg",
            "Offers",
            "Rs. 300-Rs. 600",
            "Less than Rs.300",
          ].map((item, index) => (
            <li
              key={index}
              className="border whitespace-nowrap rounded-2xl px-3 py-1 text-xs sm:text-sm md:text-base cursor-pointer hover:bg-gray-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 ">
        {foods.map((food, index) => (
          <div key={index} className="flex flex-col items-start">
            <img
              src={food.src}
              alt={`Gallery Image ${index + 1}`}
              className="h-40 sm:h-48 md:h-56 lg:h-32 w-full object-cover rounded-xl shadow-lg"
            />
            <h1 className="font-gilroy-extraBold text-base md:text-lg lg:text-xl mt-2">
              {food.Name}
            </h1>
            <div className="flex items-center text-sm md:text-base font-normal space-x-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="9" fill="url(#ratingGradient)" />
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="ratingGradient"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B" />
                    <stop offset="1" stopColor="#128540" />
                  </linearGradient>
                </defs>
              </svg>
              <h1>{food.rating}</h1>
              <h1>{food.time}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
