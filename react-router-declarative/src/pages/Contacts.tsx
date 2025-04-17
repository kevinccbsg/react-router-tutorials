import { Outlet } from "react-router"
import Sidebar from "@/components/Sidebar/Sidebar"
import { useEffect } from "react"
import useStore from "@/store/contacts"
import { useShallow } from 'zustand/react/shallow'
import { fetchContacts } from "@/api/contacts"

export default function ContactsPage() {
  const { contacts } = useStore(useShallow((state) => ({
    contacts: state.contacts,
  })));

  useEffect(() => {
    fetchContacts()
      .then((data) => {
        useStore.setState({ contacts: data })
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error)
      })
  }, []);

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
