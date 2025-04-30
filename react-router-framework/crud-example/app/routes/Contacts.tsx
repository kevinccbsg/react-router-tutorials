import { Outlet, useMatches, useRouteLoaderData } from "react-router"
import type { Route } from "./+types/Contacts";
import { fetchContacts } from "~/api/contacts";
import Sidebar from "~/components/Sidebar/Sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact home page" },
    { name: "description", content: "Review all your contacts" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const contacts = await fetchContacts();
  return { contacts };
}

export const useContactsLoaderData = () => {
  const routeData = useRouteLoaderData<typeof loader>('routes/Contacts');
  return routeData;
};


export default function ContactsPage({ loaderData }: Route.ComponentProps) {
  const { contacts } = loaderData;
  return (
    <div className="h-screen grid grid-cols-[300px_1fr]">
      {/* Sidebar */}
      <div className="border-r p-4 flex flex-col gap-4">
        <Sidebar contacts={contacts.map(contact => ({
          id: contact.id,
          name: `${contact.firstName} ${contact.lastName}`,
        }))} />
      </div>
      {/* Detail View */}
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  )
}
