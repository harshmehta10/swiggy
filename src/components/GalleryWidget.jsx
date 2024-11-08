import React, { useState, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import modak from "../assets/modak.png";
import indianSweet from "../assets/indianSweet.png";
import NorthIndian from "../assets/NorthIndian.png";
import Pizza from "../assets/Pizza.png";
import Burger from "../assets/Burger.png";
import Rolls from "../assets/Rolls.png";
import CholeBhature from "../assets/CholeBhature.png";
import Chinese from "../assets/Chinese.png";
import Biryani from "../assets/Biryani.png";
import Dosa from "../assets/Dosa.png";
import Paratha from "../assets/Paratha.png";
import Noodles from "../assets/Noodles.png";
import Cakes from "../assets/Cakes.png";
import PavBhaji from "../assets/PavBhaji.png";
import SouthIndian from "../assets/SouthIndian.png";
import Pasta from "../assets/Pasta.png";
import Pastry from "../assets/Pastry.png";
import Shake from "../assets/Shake.png";
import Salad from "../assets/Salad.png";
import Poori from "../assets/Poori.png";

function GalleryWidget() {
  const foods = [
    {
      id: 1,
      Name: "Modak",
      src: modak,
    },
    {
      id: 2,
      Name: "Indian Sweet",
      src: indianSweet,
    },
    {
      id: 3,
      Name: "North Indian",
      src: NorthIndian,
    },
    {
      id: 4,
      Name: "Pizza",
      src: Pizza,
    },
    {
      id: 5,
      Name: "Burger",
      src: Burger,
    },
    {
      id: 6,
      Name: "Rolls",
      src: Rolls,
    },
    {
      id: 7,
      Name: "Chole Bhature",
      src: CholeBhature,
    },
    {
      id: 8,
      Name: "Chinese",
      src: Chinese,
    },
    {
      id: 9,
      Name: "Biryani",
      src: Biryani,
    },
    {
      id: 10,
      Name: "Dosa",
      src: Dosa,
    },
    {
      id: 11,
      Name: "Paratha",
      src: Paratha,
    },
    {
      id: 12,
      Name: "Noodles",
      src: Noodles,
    },
    {
      id: 13,
      Name: "Cakes",
      src: Cakes,
    },
    {
      id: 14,
      Name: "Pav Bhaji",
      src: PavBhaji,
    },
    {
      id: 15,
      Name: "South Indian",
      src: SouthIndian,
    },
    {
      id: 16,
      Name: "Pasta",
      src: Pasta,
    },
    {
      id: 17,
      Name: "Pastry",
      src: Pastry,
    },
    {
      id: 18,
      Name: "Shake",
      src: Shake,
    },
    {
      id: 19,
      Name: "Salad",
      src: Salad,
    },
    {
      id: 20,
      Name: "Poori",
      src: Poori,
    },
  ];
  const [images, setImages] = useState(foods);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Navigate to previous slide
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Navigate to next slide
    }
  };

  const btnStyle = {
    borderRadius: "75px",
    background: "#d7d5d5",
  };

  return (
    <div
      className="mt-6"
      style={{
        marginLeft: "calc(10% + 36px)",
        marginRight: "calc(10% + 36px)",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-gilroy-extraBold text-2xl font-semibold">
          What's on your mind?
        </h2>

        <div className="flex space-x-2">
          <button onClick={handlePrev} className="text-2xl rounded-full">
            <BsArrowLeftCircleFill />
          </button>

          <button onClick={handleNext} className="text-2xl rounded-full">
            <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {foods.map((foods, index) => (
          <div key={index} className="px-2">
            <img
              src={foods.src}
              alt={`Gallery Image ${index + 1}`}
              className="h-44 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GalleryWidget;
