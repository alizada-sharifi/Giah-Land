import React from "react";
import MobileNavbar from "./MobileNavbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ROUTES from "../../../router/routePath";
import { cn } from "../../../helpers/common";
import { Enter, Search, ShoppingCart } from "../../icons";
import { headerLists } from "../../../data/headerLists";
import useAuthStore from "../../../store/authStore";
import ShowToast from "../../../helpers/ShowToast";

function Header() {
  const { isLoggedIn, username } = useAuthStore();
  const navigate = useNavigate();
  const handleNav = (e) => {
    if (isLoggedIn) {
      navigate(ROUTES.DOCTOR);
    } else {
      e.preventDefault();

      ShowToast("شما ابتدا باید وارد شوید", "error");
    }
  };

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
                <NavLink
                  key={index}
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
            <NavLink
              to={ROUTES.DOCTOR}
              className={({ isActive }) =>
                cn("text-base text-neutral-1300", {
                  "text-primary font-semibold": isActive,
                })
              }
              onClick={handleNav}
            >
              گیاه پزشک
            </NavLink>
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
            {isLoggedIn ? (
              <NavLink to={ROUTES.PROFILE} className="flex items-center gap-1">
                <div className="size-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold ">
                  {username.charAt(0)}
                </div>
                <span className="hidden lg:block">سلام؛ {username}</span>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  cn(
                    "text-base text-primary border-2 border-primary p-2 md:py-1 md:px-2 rounded-xl flex items-center gap-2",
                    {
                      "bg-primary": isActive,
                    }
                  )
                }
              >
                <Enter />
                <span className="text-lg text-primary hidden md:block p-0 ">
                  ورود
                </span>
              </NavLink>
            )}
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
