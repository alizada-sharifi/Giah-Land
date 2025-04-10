import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";
import useCartStore from "../store/CartStore";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import ROUTES from "../router/routePath";

const convertToNumber = (price) => {
  if (!price) return 0;

  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishPrice = price
    .split("")
    .map((ch) =>
      persianDigits.includes(ch) ? persianDigits.indexOf(ch).toString() : ch
    )
    .join("");

  const cleaned = englishPrice.replace(/[^0-9]/g, "");

  return Number(cleaned);
};

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + convertToNumber(item.price) * item.quantity,
    0
  );

  const handlePurchase = () => {
    clearCart();
    navigate(ROUTES.SUCCESSFULLPAYMENT);
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container flex flex-col md:flex-row items-start justify-between gap-10">
      <div className="md:border py-4 px-8 rounded-lg w-full md:w-2/3 max-h-96 overflow-y-auto">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => increase(item.id)}
            onDecrease={() => decrease(item.id)}
            onRemove={() => removeFromCart(item.id)}
          />
        ))}
      </div>

      <div className="md:border w-full md:w-auto border-neutral-600 rounded-2xl py-6 px-5 space-y-6 text-sm md:text-base text-neutral-1100">
        <div className="flex items-center justify-between">
          <span>تعداد گیاه:</span>
          <span>{totalCount}</span>
        </div>

        <div className="flex items-center justify-between gap-10">
          <span>مجموع سبد خرید:</span>
          <span>{totalPrice.toLocaleString("fa-IR")} افغانی</span>
        </div>

        <div className="flex items-center justify-between">
          <span>ارسال توسط</span>
          <span>گیاه لند</span>
        </div>

        <Button onClick={handlePurchase}>سفارش و خرید</Button>
      </div>
    </div>
  );
};

export default CartPage;
