import React from "react";
import playStore from "../assets/play_store.png";
import appStore from "../assets/app_store.png";

function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gray-100">
        <div
          className="flex flex-col md:flex-row mt-3 justify-between items-center space-y-4 md:space-y-0"
          style={{
            marginLeft: "calc(5% + 16px)",
            marginRight: "calc(5% + 16px)",
          }}
        >
          <div className="text-center md:text-left">
            <h2 className="font-gilroy-light text-xl md:text-2xl font-extrabold">
              For better experience, download <br /> the Swiggy app now
            </h2>
          </div>
          <div className="flex justify-center md:justify-start items-center space-x-4 p-5">
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
              rel="nofollow noopener"
              target="_blank"
            >
              <img
                src={playStore}
                alt="Play Store"
                className="h-12 md:h-16 px-2"
              />
            </a>
            <a
              href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
              rel="nofollow noopener"
              target="_blank"
            >
              <img
                src={appStore}
                alt="App Store"
                className="h-12 md:h-16 px-2"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black px-4">
        <div
          className="text-[#ffffff99] font-gilroy-light grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-4 py-5"
          style={{
            marginLeft: "calc(5% + 16px)",
            marginRight: "calc(5% + 16px)",
          }}
        >
          <div className="text-center md:text-left">
            <svg
              width={21}
              height={32}
              viewBox="0 0 21 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.3819 14.7977..." fill="#fff" />
            </svg>
            <div className="text-white font-semibold">Swiggy</div>
            <div>© 2024 Bundl Technologies Pvt. Ltd</div>
          </div>
          <div>
            <ul>
              <li className="text-white font-semibold">Company</li>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Genie</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-white font-semibold">Contact us</li>
              <li>Help & Support</li>
              <li>Partner</li>
              <li>Ride with us</li>
            </ul>
            <ul className="mt-5">
              <li className="text-white font-semibold">Legal</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-white font-semibold">We deliver to:</li>
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>
                <button className="border rounded-md border-solid border-[#ffffff80] p-1 mt-2">
                  <div>599 cities</div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
