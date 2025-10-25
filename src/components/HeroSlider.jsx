import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      image: "/main1.png",
      text: "Learn and Share Skills Locally",
      
    },
    {
      image: "/main2.png",
      text: "Grow Together with SkillSwap",
    },
    {
      image: "/Digital-Skill-Swap-1200x630.png",
      text: "Connect, Teach, and Learn Effortlessly",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-[60vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-[60vh] bg-cover bg-center flex items-center justify-center  "
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-amber-400 bg-opacity-50 text-black text-center p-6 rounded-xl">
              <h2 className=" animate__animated animate__rotateInDownLeft  text-3xl md:text-5xl font-bold">{slide.text}</h2>
              <p className=" animate__animated animate__rotateInUpRight  mt-3 text-lg">Find new opportunities around you</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
