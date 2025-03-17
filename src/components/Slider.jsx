import { useRef, useEffect } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LeftToggle, RightArrow } from "./icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider({ children }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {children}
      </Swiper>

      <button
        ref={prevRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent py-2 px-2.5 rounded-full border border-primary z-50"
      >
        <LeftToggle />
      </button>
      <button
        ref={nextRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent py-2 px-2.5 rounded-full border border-primary z-50"
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default Slider;
