import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Card from "../components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Card",
        element: <Card />,
      }
    ],
  },
])

export default router;