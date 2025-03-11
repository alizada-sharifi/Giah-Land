import { Button } from "../components";
import { Mountain } from "../components/icons";

function Notfound() {
  return (
    <div className="container flex flex-col items-center justify-center grow">
      <Mountain />
      <p className="text-black  text-base md:text-xl ">
        صفحه مورد نظر شما یافت نشد!
      </p>

      <Button
        className="bg-transparent border text-primary border-primary w-auto mt-5 hover:text-white hover:bg-primary "
        href="/"
      >
        بازگشت به صفحه اصلی
      </Button>
    </div>
  );
}

export default Notfound;
