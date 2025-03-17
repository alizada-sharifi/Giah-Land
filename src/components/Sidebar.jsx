import { NavLink } from "react-router-dom";
import img from "../assets/images/bg.png";
import { Email, Medication, User } from "./icons";
import ROUTES from "../router/routePath";
import { cn } from "../helpers/common";
import { Button, SignOut } from "./";

function Sidebar() {
  const sidebarList = [
    {
      icon: User,
      text: "مشخصات حساب کاربری",
      href: ROUTES.PROFILE,
    },
    {
      icon: Medication,
      text: "مشاوره با گیاه پزشک",
      href: ROUTES.DOCTOR,
    },
    {
      icon: Email,
      text: "پیام های دریافتی",
      href: ROUTES.MESSAGES,
    },
  ];
  return (
    <div className=" lg:w-1/5 h-screen md:border-l border-neutral-300 pl-6 space-y-16 ">
      <div className="flex gap-3 items-center">
        <img src={img} alt="user Image" className="size-14 rounded-full" />
        <div className="text-sm md:text-base space-y-1">
          <p className=" font-medium md:font-semibold text-neutral-1300">
            فرهاد رئوفی
          </p>
          <p className="text-neutral-900">۰۹۰۳۷۰۲۹۱۲۱</p>
        </div>
      </div>

      <nav className="space-y-6">
        {sidebarList.map((item, index) => {
          return (
            <NavLink
              to={item.href}
              key={index}
              className={({ isActive }) =>
                cn(
                  "flex gap-2 items-center text-base text-neutral-1000 md:text-lg py-3 px-2 rounded-lg",
                  {
                    "text-primary bg-primary-150 ": isActive,
                  }
                )
              }
            >
              <item.icon
                className={({ isActive }) =>
                  cn("", {
                    "fill-primary": isActive,
                  })
                }
              />
              {item.text}
            </NavLink>
          );
        })}
      </nav>

      <SignOut />
    </div>
  );
}

export default Sidebar;
