import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/Contacts.tsx", [
    route("contacts/:contactId", "routes/ContactDetail.tsx"),
    route("contacts/new", "routes/ContactForm.tsx"),
  ])
] satisfies RouteConfig;
