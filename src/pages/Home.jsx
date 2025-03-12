import mobileBannerImg from "../assets/images/banner-img.png";
import desktopBannerImg from "../assets/images/banner-img2.png";
import { Button, ServiceItem } from "../components";
import { LeftArrow } from "../components/icons";
import { services } from "../data/services";

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
                <span>مشاوره با گیاه پزشک</span>
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
      </div>
    </>
  );
}

export default Home;
