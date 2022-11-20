import React, { useState } from "react";
import PlayOverlay from "./PlayOverlay";

function Slider() {
  const [sliderImages] = useState([
    {
      id: 1,
      firstTitle: "The largest platform of",
      secondTitle: "Natural and ! Cultured Stones",
    },
    {
      id: 2,
      firstTitle: "The best deals for you",
      secondTitle: "Browse and Shop ! Stones Online",
    },
  ]);
  const [activeSlider, toggleActiveSlider] = useState(1);
  const [activePlayOverlay, setActivePlayOverlay] = useState(false);

  const firstSliderString = sliderImages[0].secondTitle.split("!");
  const secondSliderString = sliderImages[1].secondTitle.split("!");

  const handleClickNextSlider = () => {
    if (activeSlider !== sliderImages.length)
      toggleActiveSlider((active) => active + 1);
  };

  const handleClickPreviousSlider = () => {
    if (activeSlider !== 1) toggleActiveSlider((active) => active - 1);
  };

  const leftArrow = activeSlider === 1 ? "opacity-70" : "opacity-100";
  const rightArrow =
    activeSlider === sliderImages.length ? "opacity-70" : "opacity-100";

  return (
    <div
      className={
        "flex h-[500px] w-full justify-center bg-auto bg-center bg-no-repeat md:h-[960px] " +
        (activeSlider === 1 ? "bg-bg1" : "bg-bg2")
      }
    >
      {activePlayOverlay !== false && (
        <PlayOverlay
          activePlayOverlay={activePlayOverlay}
          onClose={setActivePlayOverlay}
        />
      )}

      <div className="flex w-full max-w-[1170px]">
        {/* START SLIDER ARROWS */}

        {/* FULL */}
        <div className="absolute left-0 top-[445px] ml-[100px] hidden md:block">
          <button onClick={handleClickPreviousSlider}>
            <img
              className={leftArrow}
              alt="leftArrow"
              src={process.env.PUBLIC_URL + "/img/slider/leftArrowSlider.svg"}
              width="70px"
              height="70px"
            />
          </button>
        </div>

        <div className="absolute right-0 mr-[100px] hidden md:top-[445px] md:block ">
          <button onClick={handleClickNextSlider}>
            <img
              className={rightArrow}
              alt="rightArrow"
              src={process.env.PUBLIC_URL + "/img/slider/rightArrowSlider.svg"}
              width="70px"
              height="70px"
            />
          </button>
        </div>

        {/* MOBILE */}

        <button
          className="absolute top-[240px] ml-[10px] block md:hidden"
          onClick={handleClickPreviousSlider}
        >
          <img
            className={leftArrow}
            alt="leftArrow"
            src={
              process.env.PUBLIC_URL + "/img/slider/leftMobileArrowSlider.svg"
            }
            width="20px"
            height="20px"
          />
        </button>

        <button
          className="absolute right-0 top-[240px] mr-[10px] block md:hidden"
          onClick={handleClickNextSlider}
        >
          <img
            className={rightArrow}
            alt="rightArrow"
            src={
              process.env.PUBLIC_URL + "/img/slider/rightMobileArrowSlider.svg"
            }
            width="20px"
            height="20px"
          />
        </button>

        {/* NEXT */}

        {/* END SLIDER ARROWS */}

        <div className="mt-[267px] flex w-full flex-col px-[10px] text-center text-white md:mt-[373px] xl:w-[1170px] 2xl:text-left">
          <span className="slider-small-title">
            {activeSlider === 1
              ? sliderImages[0].firstTitle
              : sliderImages[1].firstTitle}
          </span>
          <h1 className="slider-big-title">
            {activeSlider === 1 ? firstSliderString[0] : secondSliderString[0]}
            <br />
            {activeSlider === 1 ? firstSliderString[1] : secondSliderString[1]}
          </h1>
          <div className="mt-[15px] flex justify-center gap-[10px] md:mt-8 md:gap-6 2xl:justify-start">
            <button className="slider-register-btn">Register Now</button>
            <div className="flex items-center gap-[10px]">
              <button
                className="play-btn h-[55px] w-[55px] bg-white pl-1 md:h-[40px] md:w-[40px]"
                onClick={() => setActivePlayOverlay(true)}
              >
                <span />
              </button>
              <button
                className="hidden cursor-pointer uppercase underline md:block"
                onClick={() => setActivePlayOverlay(true)}
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
