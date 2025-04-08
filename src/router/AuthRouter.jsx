import { Login } from "../pages";
import ROUTES from "./routePath";

const AuthRouter = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
];
export default AuthRouter;
