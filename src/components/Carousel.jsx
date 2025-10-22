import React from "react";

const Carousel = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <img
              src="/LegoClassicBricks.png"
              className="max-h-[392px] max-w-[392px]  object-contain"
            />
            <h1 className="text-2xl font-bold text-white tracking-wide -mt-15">
              Lego Classic Bricks
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <img
              src="/HotWheelsMonsterTruck.png"
              className="max-h-[392px] max-w-[392px]  object-contain"
            />
            <h1 className="text-2xl font-bold text-white tracking-wide -mt-15">
              Hot Wheels Monster Truck
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <img
              src="/RubiksCube3x3.png"
              className="max-h-[392px] max-w-[392px]  object-contain"
            />
            <h1 className="text-2xl font-bold text-white tracking-wide -mt-5">
              Rubik's Cube 3x3
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
