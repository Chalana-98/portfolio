import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination } from "swiper/modules";
import { ServiceData } from "../constants";
import Image from "next/image";
import { motion } from "framer-motion";

const ActiveSlider = () => {
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="max-w-[90%] lg:max-w-[80%]"
    >
      {ServiceData.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="basis-1/2 flex-1 my-10 mx-3">
            <motion.div 
             whileHover={{ scale: 1.1 }}
             onHoverStart={(e) => {}}
             onHoverEnd={(e) => {}}
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image className="p-10 rounded-t-lg" src={item.backgroundImage} alt="" />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.Subtitle}
                </p>
                <p className="mb-3 font-normal text-white dark:text-white">
                  {item.content}
                </p>
                
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ActiveSlider;
