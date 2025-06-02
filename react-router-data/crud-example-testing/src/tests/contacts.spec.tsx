import { createRoutesStub } from "react-router";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import ContactsPage from "@/pages/Contacts";

test("LoginForm renders error messages", async () => {
  const Stub = createRoutesStub([
    {
      path: "/login",
      Component: ContactsPage,
      loader() {
        return {
          contacts: [],
        };
      },
    },
  ]);

  // render the app stub at "/login"
  render(<Stub initialEntries={["/login"]} />);
  await waitFor(() => screen.findByText('New'));
  await screen.debug();
});
