import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    activePlayOverlay
      ? document.body.classList.add("disable-scroll")
      : document.body.classList.remove("disable-scroll");
  }, [activePlayOverlay]);

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
      className={"relative flex h-[500px] w-full justify-center md:h-[960px] "}
    >
      <img
        className="absolute min-h-[500px] object-none md:min-h-[960px]"
        height="960"
        width="1920"
        src={process.env.PUBLIC_URL + "/img/slider/bg" + activeSlider + ".jpg"}
        alt=""
      />
      {!!activePlayOverlay && (
        <PlayOverlay
          activePlayOverlay={activePlayOverlay}
          onClose={setActivePlayOverlay}
        />
      )}

      <div className="flex w-full max-w-[1170px]">
        {/* START SLIDER ARROWS */}

        {/* FULL */}
        <div className="absolute left-0 top-[445px] z-10 ml-[100px] hidden md:block">
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

        <div className="absolute right-0 z-10 mr-[100px] hidden md:top-[445px] md:block">
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

        <div className="z-0 mt-[267px] flex w-full flex-col text-center text-white md:mt-[373px] md:px-[170px] xl:w-[1170px] 2xl:text-left">
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
