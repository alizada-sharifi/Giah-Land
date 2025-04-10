import { NavLink } from "react-router-dom";
import { Email, Medication, User } from "./icons";
import ROUTES from "../router/routePath";
import { cn } from "../helpers/common";
import { SignOut } from "./";
import { profileStore } from "../store";

function Sidebar({ className }) {
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
  const { name, family, mobileNo } = profileStore();
  return (
    <div
      className={cn(
        "lg:w-1/5 h-screen md:border-l border-neutral-300 pl-6 space-y-16",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="size-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold ">
          {name.charAt(0)}
        </div>

        <div className="text-sm md:text-base space-y-1">
          <div className=" font-medium md:font-semibold text-neutral-1300 flex gap-1">
            <span>{name}</span>
            <span>{family}</span>
          </div>
          <p className="text-neutral-900">{mobileNo}</p>
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
