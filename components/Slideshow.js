import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
const Slideshow = () => {
  //Array of Images
  const images = [
    "images/Image1.jpeg",
    "images/Image2.jpeg",
    "images/Image3.jpeg",
    "images/Image4.jpeg",
    "images/Image5.jpeg",
    "images/Image8.jpeg",
    "images/Image9.jpeg",

    "images/Image11.jpeg",
    "images/Image12.jpeg",
    "images/Image13.webp",
    "images/Image14.webp",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 20,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ marginRight: "-3px", cursor: "pointer" }}>
        <Image src="/trans.png"  width={700} height={900} className=" cursor-pointer" alt="" />
        {/* <svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg> */}
      </div>
    ),
    nextArrow: (
      <div style={{  marginLeft: "-30px", cursor: "pointer" }}>
		   <Image src="/trans.png"  width={700} height={900} className=" cursor-pointer" alt="" />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg> */}
      </div>
    ),
  };
  return (
    <div
      className=" carousel bg-black slide relative"
      data-bs-ride="carousel"
      id="carouselExampleSlidesOnly"
    >
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <button>
              <picture>

              <img className=" object-cover rounded-lg shadow-xl" alt="" src={each} />
              </picture>
            </button>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
