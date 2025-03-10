import { Login, SignUp } from "../pages";
import ROUTES from "./routePath";

const AuthRouter = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <SignUp />,
  },
];
export default AuthRouter;
