import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Card from "../components/Card";
import Kartu from "../components/Kartu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Card",
        element: <Card />,
      },
      {
        path: "Kartu",
        element: <Kartu />,
      }
    ],
  },
]);

export default router;
