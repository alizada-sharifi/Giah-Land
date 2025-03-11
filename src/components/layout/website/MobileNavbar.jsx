import { useState } from "react";
import { cn } from "../../../helpers/common";
import { Menu, Close } from "../../icons";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../router/routePath";
import bg from "../../../assets/images/bg.png";
function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="rounded-lg bg-neutral-300 p-1 block md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </button>

      <div
        className={cn(
          "fixed inset-0 hidden bg-gray-900/20 transition-opacity duration-300 ease-linear opacity-0 z-50",
          {
            "!block opacity-1": isOpen,
          }
        )}
      >
        <div
          className={cn(
            "relative h-full bg-white flex flex-col w-full max-w-xs flex-1 transform transition duration-300 ease-in-out translate-x-full",
            {
              "translate-x-0": isOpen,
            }
          )}
        >
          <div className="relative">
            <img src={bg} className="object-contain object-top w-full " />
            <div className="absolute top-0 left-0 w-full h-full p-4">
              <Close
                className=" fill-white size-10 mr-auto cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <nav className="flex flex-col [&>*]:py-2 p-4 divide-y ">
            <NavLink
              to={ROUTES.HOME}
              className={({ isActive }) =>
                cn("text-sm !pt-0", {
                  "text-primary": isActive,
                })
              }
            >
              صفحه اصلی
            </NavLink>
            <NavLink
              to={ROUTES.DOCTOR}
              className={({ isActive }) =>
                cn("text-sm", {
                  "text-primary": isActive,
                })
              }
            >
              گیاه پزشک
            </NavLink>
            <NavLink
              to={ROUTES.BLOG}
              className={({ isActive }) =>
                cn("text-sm", {
                  "text-primary": isActive,
                })
              }
            >
              وبلاگ
            </NavLink>
            <NavLink
              to={ROUTES.CONTACTUS}
              className={({ isActive }) =>
                cn("text-sm", {
                  "text-primary": isActive,
                })
              }
            >
              تماس با ما
            </NavLink>
            <NavLink
              to={ROUTES.ABOUT}
              className={({ isActive }) =>
                cn("text-sm", {
                  "text-primary": isActive,
                })
              }
            >
              درباره ما
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
