import {
  Dialog,
  DialogTitle,
  Description,
  DialogPanel,
} from "@headlessui/react";
import { useState } from "react";
import Button from "./Button";
import { Close } from "./icons";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import useStore from "../store";

function SignOut() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const { removeInfo } = useStore();

  const deleteLocalstorage = () => {
    localStorage.clear();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    removeInfo();
    deleteLocalstorage();
    window.location.reload();
  };

  return (
    <>
      <Button
        className=" btn flex items-center gap-2 bg-error-light text-error hover:bg-error-ligh"
        onClick={() => setIsOpen(true)}
      >
        <span>خروج از حساب کاربری</span>
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <DialogPanel className="w-96 bg-white rounded-xl shadow-lg">
          <DialogTitle className="text-lg font-medium flex items-center justify-center relative rounded-t-xl py-5 bg-neutral-400 ">
            <span>خروج</span>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute left-6"
            >
              <Close className={" fill-neutral-900"} />
            </button>
          </DialogTitle>
          <Description className="py-8 text-center text-xs sm:text-sm text-neutral-1000 md:text-base px-4">
            آیا مایل به خروج از حساب کاربری خود هستید؟
          </Description>

          <div className="flex items-center justify-center gap-10 mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded border px-7 sm:px-11 py-1 md:py-2 text-white border-primary bg-primary"
            >
              بازگشت
            </button>
            <button
              onClick={handleLogout}
              className="rounded border px-7 sm:px-11 py-[5px] md:py-[7px] text-error border-[#FFF2F2] bg-[#FFF2F2]"
            >
              خروج
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default SignOut;
