import mobileBannerImg from "../assets/images/banner-img.png";
import desktopBannerImg from "../assets/images/banner-img2.png";
import { Button, ServiceContainer, ServiceItem } from "../components";
import { LeftArrow } from "../components/icons";
import { services } from "../data/services";
import img1 from "../assets/images/bg.png";
import img2 from "../assets/images/img2.png";
import Container from "../components/grass/Container";
import { slides } from "../data/apartmantGrasses";
import Item2 from "../components/grass/Item2";
import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import { grasses } from "../data/grasses";
import { slide } from "../data/ornamental";
import { grasses2 } from "../data/grasses2";
import { slides2 } from "../data/gift";
import { Link } from "react-router-dom";
import ROUTES from "../router/routePath";

function Home() {
  const plantNumber = [
    {
      name: "گیاه خانگی",
      number: "۹۴۳+",
    },
    {
      name: "گیاه تزئینی",
      number: "۲۳۴+",
    },
    {
      name: "گیاه کادویی",
      number: "۱۲۸+",
    },
  ];

  return (
    <>
      <div className="container">
        {/* =============== banner section ================ */}
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <img
            src={mobileBannerImg}
            alt="banner Image"
            className="rounded-full object-cover size-96 md:hidden "
          />

          <div className="md:w-1/2 space-y-10 text-center md:text-start">
            <h3 className="font-semibold text-xl text-neutral-1300 md:font-bold md:text-4xl">
              خرید راحت گیاه،با <b className="text-primary">گیاه لند!</b>
            </h3>
            <p className="text-sm md:text-xl text-neutral-1100 leading-6">
              با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه
              استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت
              مشاوره بگیری.
            </p>
            <div className="flex gap-6">
              <Button className="font-medium text-xs md:text-lg">
                گیاهان تخفیف دار
              </Button>
              <Button className="bg-transparent border-2 border-dashed border-primary hover:bg-transparent text-primary flex  items-center gap-2 justify-center font-medium text-xs md:text-lg">
                <Link to={ROUTES.DOCTOR}>مشاوره با گیاه پزشک</Link>
                <LeftArrow />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              {plantNumber.map((plant, index) => {
                return (
                  <div className="text-center" key={index}>
                    <p className="text-2xl text-primary-1000 md:font-medium md:text-3xl">
                      {plant.number}
                    </p>
                    <p className="text-base text-primary-1100 md:text-xl">
                      {plant.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <img
            src={desktopBannerImg}
            alt=""
            className=" hidden md:block w-1/2"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-10 mt-14 items-center justify-between">
          {services.map((item, index) => {
            return <ServiceItem {...item} key={index} />;
          })}
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-10">
          <img
            src={img1}
            alt="grass image"
            className="w-full md:w-1/2 h-32 md:h-60 rounded-xl md:rounded-2xl object-cover"
          />
          <img
            src={img2}
            alt="grass image"
            className="w-full md:w-1/2 h-32 md:h-60 rounded-xl md:rounded-2xl object-cover"
          />
        </div>

        {/* ============== aparatmant grasses section ================= */}
        <Container header={"گیاهان آپارتمانی"} slides={slides} />

        <Slider>
          {grasses.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-10 bg-transparent items-center justify-center">
                <Item2
                  bg={slide.img}
                  title={slide.title}
                  price={slide.price}
                  id={slide.id}
                  img={slide.img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Slider>

        <ServiceContainer />

        <Container header={"گیاهان تزئینی"} slides={slide} />

        <Slider>
          {grasses2.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-10 bg-transparent items-center justify-center">
                <Item2
                  bg={slide.img}
                  title={slide.title}
                  price={slide.price}
                  id={slide.id}
                  img={slide.img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Slider>

        <Container header={"گیاهان کادویی"} slides={slides2} />
      </div>
    </>
  );
}

export default Home;
