import { Dashboard, Doctor, Messages, Profile } from "../pages";
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
  {
    path: ROUTES.MESSAGES,
    element: <Messages />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
];

export default DashboardRouter;
