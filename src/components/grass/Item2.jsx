import Button from "../Button";
import { LeftArrow } from "../icons";
import { useCartStore } from "../../store/cartStore";
import { useState, useEffect } from "react";

import useAuthStore from "../../store/authStore";

function Item2({ id, bg, title, price, img }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [added, setAdded] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const cart = useCartStore((state) => state.cart);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart({ id, title, price, img });
      setAdded(true);
      showToast("محصول با موفقیت به سبد خرید اضافه شد", "success");
    } else {
      showToast("شما ابتدا باید وارد شوید!", "error");
    }
  };

  useEffect(() => {
    const isProductInCart = cart.some((item) => item.id === id);
    setAdded(isProductInCart);
  }, [cart, id]);

  return (
    <div className="w-72 h-60 rounded-xl overflow-hidden mt-10 relative ">
      <img src={bg} alt="" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      <h3 className="font-semibold text-base md:text-xl text-white absolute z-10 bottom-16 right-6">
        {title}
      </h3>

      {added ? (
        <Button
          className="absolute bottom-2 right-6 w-auto bg-transparent text-white  border border-white hover:bg-transparent rounded-xl"
          href="/cart"
        >
          مشاهده سبد خرید
        </Button>
      ) : (
        <Button
          className="absolute bottom-2 right-6 w-auto bg-transparent hover:bg-transparent border border-white rounded-xl flex items-center gap-3 "
          onClick={handleAddToCart}
        >
          <span className="text-base md:text-lg ">خرید {title}</span>
          <LeftArrow className={"fill-white"} />
        </Button>
      )}
    </div>
  );
}

export default Item2;
