import Slider from "../Slider";
import Item from "./Item";
import { SwiperSlide } from "swiper/react";

function Container({ header, slides }) {
  return (
    <div className="mt-10">
      <h2 className="font-semibold text-xl text-primary md:font-bold md:text-2xl mb-3">
        {header}
      </h2>

      <Slider>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-10 bg-transparent items-center justify-center">
              <Item price={slide.price} title={slide.title} img={slide.img} />
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}

export default Container;
