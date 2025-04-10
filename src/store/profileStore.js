import { create } from "zustand";

const profileStore = create((set) => ({
  name: "",
  family: "",
  mobileNo: "",
  email: "",
  address: "",
  phoneNo: "",
  saveInfo: ({ name, family, mobileNo, email, address, phoneNo }) => {
    set(() => ({
      name,
      family,
      mobileNo,
      email,
      address,
      phoneNo,
    }));

    localStorage.setItem(
      "userInfo",
      JSON.stringify({ name, family, mobileNo, email, address, phoneNo })
    );
  },
  removeInfo: () => {
    set({
      name: "",
      family: "",
      mobileNo: "",
      email: "",
      address: "",
      phoneNo: "",
    });
    localStorage.removeItem("userInfo");
  },
  loadInfo: () => {
    const savedInfo = localStorage.getItem("userInfo");
    if (savedInfo) {
      const parsedInfo = JSON.parse(savedInfo);
      set(parsedInfo);
    }
  },
}));

export default profileStore;
