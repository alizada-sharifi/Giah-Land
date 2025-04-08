import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      username: "",

      login: (username) =>
        set(() => ({
          isLoggedIn: true,
          username,
        })),

      logout: () =>
        set(() => ({
          isLoggedIn: false,
          username: "",
        })),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
