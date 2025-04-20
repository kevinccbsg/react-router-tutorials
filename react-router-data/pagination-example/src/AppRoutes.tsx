import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import loadContacts from "./pages/loader";
import { contactDetailActions } from "./pages/actions";

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
