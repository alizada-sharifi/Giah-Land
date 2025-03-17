import Button from "../Button";
function Item({ price, title, img }) {
  return (
    <div className="border border-neutral-500 rounded-xl p-4 space-y-2">
      <img src={img} alt="" className="w-full " />
      <h3 className="text-base md:text-lg text-neutral-1300 font-medium">
        {title}
      </h3>

      <div className="flex items-center justify-between text-base text-neutral-1300 mb-5 md:text-lg">
        <span>قیمت</span>
        <span>{price}</span>
      </div>
      <Button>مشاهده بیشتر</Button>
    </div>
  );
}
export default Item;
