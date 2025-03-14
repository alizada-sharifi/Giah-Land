import React from "react";
import MobileNavbar from "./MobileNavbar";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../../router/routePath";
import { cn } from "../../../helpers/common";
import { Enter, Search, ShoppingCart } from "../../icons";
import { headerLists } from "../../../data/headerLists";

function Header() {
  return (
    <header className="py-8 shadow">
      <div className="container">
        <div className="flex items-center justify-between gap-4 text-neutral-1300S">
          <MobileNavbar />
          <div className="logo">
            <Link
              to={ROUTES.HOME}
              className=" font-medium text-base md:font-bold md:text-2xl text-primary "
            >
              گیاه لند
            </Link>
          </div>

          <nav className="gap-4 items-center  hidden md:flex">
            {headerLists.map((item, index) => {
              return (
                <NavLink key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    cn("text-base text-neutral-1300", {
                      "text-primary font-semibold": isActive,
                    })
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block border-2 border-primary p-2 rounded-xl">
              <Search />
            </button>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                cn("text-base  border-2 border-primary p-2 rounded-xl ", {
                  "": isActive,
                })
              }
            >
              <ShoppingCart />
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                cn(
                  "text-base text-primary border-2 border-primary p-2 md:py-1 md:px-2 rounded-xl flex items-center gap-2 ",
                  {
                    "bg-primary": isActive,
                  }
                )
              }
            >
              <Enter />
              <span className="text-lg text-primary hidden md:block p-0 ">
                ورود/ثبت نام
              </span>
            </NavLink>
          </div>
        </div>

        <div className="relative block md:hidden">
          <input
            type="text"
            className="w-full bg-neutral-300 mt-3 rounded-lg py-3 pr-9 pl-2 outline-none placeholder:text-sm placeholder:text-neutral-900 text-neutral-900"
            placeholder="جستجو گیاه"
          />
          <button>
            <Search className={"absolute top-[45%] right-3 fill-neutral-900"} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
