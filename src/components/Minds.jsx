import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Minds = () => {
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

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 bg-white   ">
      <div className="flex mb-4">
        <h2 className="font-semibold text-lg">What's on your mind?</h2>
      </div>

      <Slider {...settings}>
        {foods.map((food, index) => (
          <div key={index} className="carousel-item flex flex-col items-center">
            <img src={food.src} alt="food" className=" h-40" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default Minds;
