import { MainLayout } from "../layouts";
import { Doctor, Home, NotFound } from "../pages";
import ROUTES from "./routePath";

const MainRouter = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: ROUTES.DOCTOR,
        element: <Doctor />,
      },
    ],
  },
];

export default MainRouter;
