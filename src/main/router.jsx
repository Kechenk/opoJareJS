import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Card from "../components/Card";
import Kartu from "../components/Kartu";
import Playground from "../components/Playground";

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
      },
      {
        path: "playground",
        element: <Playground />
      }
    ],
  },
]);

export default router;
