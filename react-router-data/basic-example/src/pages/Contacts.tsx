import { Outlet, useLoaderData } from "react-router"
import Sidebar from "@/components/Sidebar/Sidebar"
import loadContacts from "./loader";

export default function ContactsPage() {
  const { contacts } = useLoaderData<typeof loadContacts>();

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
