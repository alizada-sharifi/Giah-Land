import React from "react";
import { Empty, LeftArrow } from "./icons";
import Button from "./Button";

function EmptyCart() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3">
        <Empty />
        <p className="font-medium md:font-semibold text-base md:text-xl text-black">
          سبد خرید شما خالی می باشد!
        </p>
        <p className="text-sm text-center md:text-lg">
          می توانید برای مشاهده بیشتر محصولات به صفحه اصلی بروید
        </p>

        <Button
          className="w-auto bg-transparent hover:bg-transparent border-2 border-primary text-primary flex items-center gap-1"
          href="/"
        >
          بازگشت به صفحه اصلی
          <LeftArrow />
        </Button>
      </div>
    </>
  );
}

export default EmptyCart;
