import { Footer, Header } from "../components/layout/website";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
