import { Sidebar } from "../components";
import { Header } from "../components/layout/website";
import { cn } from "../helpers/common";

function DashboardLayout({ children, className }) {
  return (
    <>
      <div className="w-full h-screen overflow-y-hidden ">
        <Header />
        <main className={cn("w-full flex gap-10 container mt-10", className)}>
          <Sidebar className="hidden lg:block" />
          {children}
        </main>
      </div>
    </>
  );
}

export default DashboardLayout;
