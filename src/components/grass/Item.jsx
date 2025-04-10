import { useCartStore } from "../../store/cartStore";
import Button from "../Button";
import { useEffect, useState } from "react";
import ROUTES from "../../router/routePath";
import showToast from "../../helpers/ShowToast.jsx";
import useAuthStore from "../../store/authStore.js";

function Item({ id, title, price, img }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const [added, setAdded] = useState(false);
  const { isLoggedIn } = useAuthStore;
  useEffect(() => {
    const isProductInCart = cart.some((item) => item.id === id);
    setAdded(isProductInCart);
  }, [cart, id]);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart({ id, title, price, img });
      setAdded(true);
      showToast("محصول با موفقیت به سبد خرید اضافه شد", "success");
    } else {
      showToast("شما ابتدا باید وارد شوید!", "error");
    }
  };

  return (
    <div className="border border-neutral-500 rounded-xl p-4 space-y-2">
      <img src={img} alt={title} className="w-full" />
      <h3 className="text-base md:text-lg text-neutral-1300 font-medium">
        {title}
      </h3>
      <div className="flex items-center justify-between text-base text-neutral-1300 mb-5 md:text-lg">
        <span>قیمت</span>
        <span>{price}</span>
      </div>
      {added ? (
        <Button
          href={ROUTES.CART}
          className="bg-transparent hover:bg-transparent border border-primary text-primary text-center"
        >
          مشاهد سبد خرید
        </Button>
      ) : (
        <Button onClick={handleAddToCart}>افزودن به سبد خرید</Button>
      )}
    </div>
  );
}

export default Item;
