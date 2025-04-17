import { Routes, Route } from "react-router";
import ContactsPage from "./pages/Contacts";
import ContactDetail from "./pages/ContactDetail";
import ContactForm from "./pages/ContactForm";

const AppRoutes = () => (
  <Routes>
    {/* This is a simple example of a declarative route */}
    <Route path="/about" element={<div>About</div>} />
    {/* This is a simple example of a declarative route with a nested route */}
    <Route path="/" Component={ContactsPage}>
      <Route path="/contacts/:contactId" element={<ContactDetail />} />
      <Route path="/contacts/new" Component={ContactForm} />
    </Route>
    {/* This is a simple example of a declarative route with splat */}
    <Route path="/*" element={<div>Not Found</div>} />
  </Routes>
);

export default AppRoutes;
