import React from "react";
import { Success } from "../components/icons";
import { Button } from "../components";
function SuccessfullPayment() {
  return (
    <div className="container flex flex-col items-center justify-center gap-5">
      <Success className={"size-48 md:size-64"} />
      <p className="font-bold text-primary text-base md:text-4xl">
        پرداخت شما با موفقیت انجام شد!
      </p>

      <Button
        className="w-auto bg-transparent hover:bg-transparent border border-primary text-primary"
        href="/"
      >
        بازگشت به صفحه اصلی
      </Button>
    </div>
  );
}

export default SuccessfullPayment;
