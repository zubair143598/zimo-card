import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [days, setDays] = useState(100);
  const [hours, setHours] = useState(22);
  const [minutes, setMinutes] = useState(33);
  const [seconds, setSeconds] = useState(22);
  const carouselItems = [
    {
      imageUrl: "../assists/1.png",
      topText: "Top Text 1",
      bottomText: "Bottom Text 1",
    },
    {
      imageUrl: "../assists/2.png",
      topText: "Top Text 2",
      bottomText: "Bottom Text 2",
    },
    {
      imageUrl: "../assists/3.png",
      topText: "Top Text 2",
      bottomText: "Bottom Text 2",
    },
    // Add more carousel items as needed
  ];
  const currentItem = carouselItems[currentItemIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease seconds
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 59));

      // Decrease minutes
      setMinutes((prevMinutes) =>
        prevMinutes > 0 && seconds === 0 ? prevMinutes - 1 : prevMinutes
      );

      // Decrease hours
      setHours((prevHours) =>
        prevHours > 0 && minutes === 0 && seconds === 0
          ? prevHours - 1
          : prevHours
      );

      // Decrease days
      setDays((prevDays) =>
        prevDays > 0 && hours === 0 && minutes === 0 && seconds === 0
          ? prevDays - 1
          : prevDays
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="carousel border border-black rounded-3xl  relative">
      <div className=" absolute  w-[100%]">
        <div className="countdown-timer p-3 justify-between uppercase text-white rounded-3xl bg-opacity-40 bg-black  flex">
          <div className="mx-3">
            <p>
              <span className="timer-item font-thin text-[40px]  lg:text-[60px] ">{days}</span>
            </p>
            <p className="lg:text-[25px] font-thin tracking-[3px]">days</p>
          </div>
          <div className="mx-3">
            <p>
              <span className="timer-item text-[40px] font-thin lg:text-[60px]">
                {hours}
              </span>
            </p>
            <p className="lg:text-[25px] font-thin tracking-[3px]">hours</p>
          </div>
          <div className="mx-3">
            <p>
              <span className="timer-item text-[40px]  font-thin  lg:text-[60px]">
                {minutes}
              </span>
            </p>
            <p  className="lg:text-[25px] tracking-[3px] font-thin">minutes</p>
          </div>
          <div className="mx-3">
            <p>
              <span className="timer-item  font-thin text-[40px]  lg:text-[60px]">
                {seconds}
              </span>
            </p>
            <p className="lg:text-[25px] font-thin tracking-[3px]">seconds</p>
          </div>
        </div>
      </div>

      <div className="  ">
        <div className=" absolute flex  mr-[30px] right-0 top-[25%]">
          <img
            className=" w-[25.88px] mx-[30px]"
            src="../assists/share.png"
            alt=""
          />
          <img className=" w-[25.88px]  " src="../assists/heart.png" alt="" />
        </div>

        <img
          src={currentItem.imageUrl}
          className=" border-black rounded-3xl h-[900px] w-[992px] "
          alt="Carousel Item"
        />
        <div className="absolute top-[50%] left-[10px]">
          <button
            className=" prev-button"
            onClick={() =>
              setCurrentItemIndex((prevIndex) =>
                prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
              )
            }
          >
            <img src="../assists/left.png" alt="" />
          </button>
        </div>
        <div className="absolute top-[50%] right-[20px] ">
          <button
            className="next-button "
            onClick={() =>
              setCurrentItemIndex(
                (prevIndex) => (prevIndex + 1) % carouselItems.length
              )
            }
          >
            <img src="../assists/right.png" alt="" />
          </button>
        </div>
      </div>

      <div className="absolute text-white bottom-0 w-[100%]">
      <div className='bg-black p-3 bg-opacity-70 border rounded-lg'>
      <div className=' flex justify-center' >
      <div className="bg-white  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
   <div className="  ml-5 bg-white  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
   <div className="  ml-5 bg-[#BE9f56]  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
   <div className="  ml-5 bg-white  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
   <div className="  ml-5 bg-white  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
   <div className="  ml-5 bg-white  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
   <div className="  ml-5 bg-white  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
   <div className="  ml-5 bg-white  h-[3px] lg:w-[20.91px] w-[14.91px]"></div>
      </div>
      <div>
      <p className=" text-2xl tracking-[6px]  font-normal mt-3  text-center ">
            SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM
          </p>
      </div>
      <div className="grid grid-cols-4  ">
        
      <div className="lg:ml-[66px] mt-[18px]">
        <img className=" w-[59.82px] " src="../assists/4.png" alt=""/>
      </div>
      <div className="mt-[18px]">
        <p className=" text-[16px] tracking-[2px]">£5,000,000 GBP</p>
        <p className=" text-[12px] tracking-[2px] ml-3 " >#ZM7861234567</p>
      </div>
      <div className="mt-[18px]">
        <img className=" w-[35.95px]" src="../assists/5.png" alt=""/>
      </div>
      <div className="mt-[18px]">
        <p className=" normal-case  lg: text-2xl">Sotheby's</p>
        <p className=" text-[10px] " >international reality</p>
      </div>
      </div>
    </div>
      </div>




    </div>
  );
};

export default Carousel;
