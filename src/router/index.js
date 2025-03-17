import { createBrowserRouter } from "react-router";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import DashboardRouter from "./DashboardRouter";

const router = createBrowserRouter([
  ...MainRouter,
  ...AuthRouter,
  ...DashboardRouter,
]);

export default router;
