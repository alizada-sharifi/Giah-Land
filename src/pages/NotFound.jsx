import { Mountain } from "../components/icons";

function Notfound() {
  return (
    <div className="container flex flex-col items-center justify-center grow">
     <Mountain className="bg-blue-200" />
      <p className="text-black  text-base md:text-xl ">
        صفحه مورد نظر شما یافت نشد!
      </p>
    </div>
  );
}

export default Notfound;
