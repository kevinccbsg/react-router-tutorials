import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import loadContacts from "./pages/Home/loader";
import { contactDetailActions } from "./pages/Home/actions";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Home />,
    action: contactDetailActions,
    loader: loadContacts,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default AppRoutes;
