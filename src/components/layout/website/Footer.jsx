import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Telegram } from "../../icons";
import { footerList } from "../../../data/footerList";

function Footer() {
  return (
    <footer className="bg-neutral-200">
      <div className="container py-5 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="font-medium text-base text-primary md:font-bold md:text-2xl ">
              گیاه لند
            </h2>
            <p className="text-sm text-justify text-neutral-1000 mt-4 md:text-base  ">
              گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان
              باعث راحتی شما در خرید انواع گیاه شود. تنوع گیاهان و همچنین ایجاد
              بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت‌های گیاه لند
              می‌باشد.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 md:w-1/2">
            {footerList.map((item, index) => {
              return (
                <div key={index}>
                  <h4 className="text-sm font-semibold text-neutral-1000 md:text-xl ">
                    {item.title}
                  </h4>
                  <ul className="space-y-4 mt-4">
                    {item.items.map((liItem, liIndex) => (
                      <li className="text-sm text-neutral-1000 md:text-xl" key={liIndex}>
                        {liItem}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm text-neutral-1000">تلفن پشتیبانی: ۰۲۱۲۴۴۴</p>
          <div className="flex mt-3 gap-3 items-center">
            <Link to={"#"}>
              <Linkedin className={"size-5 md:size-6"} />
            </Link>
            <Link to={"#"}>
              <Telegram className={"size-5 md:size-6"} />
            </Link>
            <Link to={"#"}>
              <Instagram className={"size-5 md:size-6"} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
