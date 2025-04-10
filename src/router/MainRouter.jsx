import { MainLayout } from "../layouts";
import { Cart, Home, NotFound, SuccessfullPayment } from "../pages";
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
        path: ROUTES.CART,
        element: <Cart />,
      },
      {
        path: ROUTES.SUCCESSFULLPAYMENT,
        element: <SuccessfullPayment />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default MainRouter;
