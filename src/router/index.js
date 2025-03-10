import { createBrowserRouter } from "react-router";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const router = createBrowserRouter([...MainRouter, ...AuthRouter]);

export default router;
