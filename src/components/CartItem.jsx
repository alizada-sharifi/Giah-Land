import { Trash } from "./icons";

function CartItem({
  img,
  title,
  price,
  quantity,
  onIncrease,
  onRemove,
  onDecrease,
}) {
  return (
    <div className=" flex gap-3 items-center flex-col md:flex-row mb-6 w-full ">
      <img
        src={img}
        alt="تصویر محصول"
        className="md:w-1/4 object-cover rounded-xl"
      />
      <div className="space-y-3">
        <h3 className="md:font-semibold font-medium text-base text-neutral-1200 md:text-xl">
          {title}
        </h3>

        <div className="flex gap-2 items-center">
          <p className="text-sm md:text-base text-neutral-1100">قیمت :</p>
          <p className="text-base md:text-lg text-neutral-1300 font-medium">
            {price}
          </p>
        </div>

        <div className="border relative border-neutral-700 rounded-lg px-2 pt-2 pb-3 flex items-center justify-between w-32">
          <button
            className="text-3xl md:text-4xl text-primary"
            onClick={onIncrease}
          >
            +
          </button>
          <p className="text-lg font-bold">{quantity}</p>
          {quantity === 1 ? (
            <button onClick={onRemove}>
              <Trash />
            </button>
          ) : (
            <button
              className="text-3xl md:text-4xl text-error"
              onClick={onDecrease}
            >
              -
            </button>
          )}

          <span className="absolute bottom-0 right-1/3">تعداد</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
