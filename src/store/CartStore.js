import { create } from "zustand";

const getFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const useCartStore = create((set) => ({
  cart: getFromLocalStorage(),

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existing) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      saveToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updated = state.cart.filter((item) => item.id !== id);
      saveToLocalStorage(updated);
      return { cart: updated };
    }),

  increase: (id) =>
    set((state) => {
      const updated = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveToLocalStorage(updated);
      return { cart: updated };
    }),

  decrease: (id) =>
    set((state) => {
      const updated = state.cart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      saveToLocalStorage(updated);
      return { cart: updated };
    }),

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },
}));

export default useCartStore;
