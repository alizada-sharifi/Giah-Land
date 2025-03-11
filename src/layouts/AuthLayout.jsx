import { cn } from "../helpers/common";
import img from "../assets/images/login-image.png";
function AuthLayout({ children, className }) {
  return (
    <main className=" w-full h-screen ">
      <div
        className={cn(
          "h-screen flex   items-center justify-center md:justify-between",
          className
        )}
      >
        {children}
        <img src={img} alt="" className="w-1/2 h-full object-cover hidden md:block " />
      </div>
    </main>
  );
}

export default AuthLayout;
