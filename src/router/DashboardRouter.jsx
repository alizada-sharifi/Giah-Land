import { Doctor, Profile } from "../pages";
import ROUTES from "./routePath";

const DashboardRouter = [
  {
    path: ROUTES.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTES.DOCTOR,
    element: <Doctor />,
  },
];

export default DashboardRouter;
