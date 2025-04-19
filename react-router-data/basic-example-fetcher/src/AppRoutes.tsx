import { createBrowserRouter } from "react-router";
import ContactsPage from "./pages/Contacts";
import ContactDetail from "./pages/ContactDetail";
import ContactForm from "./pages/ContactForm";
import loadContacts from "./pages/loader";
import { contactDetailActions, newContactAction, newContactHookFormAction } from "./pages/actions";
import ContactsSkeletonPage from "./Layouts/HomeSkeleton";
import ContactFormHookForm from "./pages/ContactFormHookForm";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <ContactsPage />,
    loader: loadContacts,
    HydrateFallback: ContactsSkeletonPage,
    children: [
      {
        path: "contacts/:contactId",
        action: contactDetailActions,
        element: <ContactDetail />,
      },
      {
        path: "contacts/new-custom-validation",
        action: newContactAction,
        element: <ContactForm />,
      },
      {
        path: "contacts/new-react-hook-form",
        action: newContactHookFormAction,
        element: <ContactFormHookForm />,
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
