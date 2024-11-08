import React from "react";
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
  return (
    <div className="mx-40">
      <div>
        <h1 className="font-gilroy-extraBold text-2xl font-semibold  my-2">
          Restaurants with online food delivery in Noida
        </h1>
      </div>
      <div>
        <ul className="list-none flex space-x-2 my-4">
          <li className="border rounded-2xl px-2 py-1">Filter</li>
          <li className="border rounded-2xl px-2 py-1">Sort By</li>
          <li className="border rounded-2xl px-2 py-1">Fast Delivery</li>
          <li className="border rounded-2xl px-2 py-1">New on Swiggy</li>
          <li className="border rounded-2xl px-2 py-1">Rating 4.0+</li>
          <li className="border rounded-2xl px-2 py-1">Pure Veg</li>
          <li className="border rounded-2xl px-2 py-1">Offers</li>
          <li className="border rounded-2xl px-2 py-1">Rs. 300-Rs. 600</li>
          <li className="border rounded-2xl px-2 py-1">Less than Rs.300</li>
        </ul>
      </div>
      <div className="grid grid-cols-4 content-start gap-8">
        {foods.map((food, index) => (
          <div key={index}>
            <img
              src={food.src}
              alt={`Gallery Image ${index + 1}`}
              className=" h-32 w-56 object-cover rounded-xl shadow-lg my-2" // Adjusted classes for image styling
            />
            <h1 className="font-gilroy-extraBold text-xl mt-2">{food.Name}</h1>
            <div className="flex items-center text-base font-normal space-x-1">
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