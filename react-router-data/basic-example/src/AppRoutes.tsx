import { createBrowserRouter } from "react-router";
import ContactsPage from "./pages/Contacts";
import ContactDetail from "./pages/ContactDetail";
import ContactForm from "./pages/ContactForm";
import loadContacts from "./pages/loader";
import { contactDetailActions, newContactAction } from "./pages/actions";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <ContactsPage />,
    loader: loadContacts,
    children: [
      {
        path: "contacts/:contactId",
        action: contactDetailActions,
        element: <ContactDetail />,
      },
      {
        path: "contacts/new",
        action: newContactAction,
        element: <ContactForm />,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default AppRoutes;
