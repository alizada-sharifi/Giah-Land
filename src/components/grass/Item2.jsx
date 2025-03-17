import Button from "../Button";
import { LeftArrow } from "../icons";

function Item2({ bg, title }) {
  return (
    <div className="w-72 h-60 rounded-xl overflow-hidden mt-10 relative ">
      <img src={bg} alt="" className="w-full h-full object-cover" />

      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      <h3 className="font-semibold text-base md:text-xl text-white absolute z-10 bottom-16 right-6">
        {title}
      </h3>
      <Button className="absolute bottom-2 right-6 w-auto  bg-transparent hover:bg-transparent border border-white rounded-xl flex items-center gap-3 ">
        <span className="text-base md:text-lg ">خرید {title}</span>
        <LeftArrow className={"fill-white"} />
      </Button>
    </div>
  );
}

export default Item2;
