import { useLoaderData } from "react-router";
import loadContacts from "./loader";
import Pagination from "@/components/Pagination/Pagination";
import DeleteContact from "./DeleteContact";

export default function ContactList() {
  const { contacts, page, pageSize, total } = useLoaderData<typeof loadContacts>();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact List</h1>
      <ul className="divide-y divide-gray-200">
        {contacts.map((contact) => (
          <DeleteContact key={contact.id} contact={contact} />
        ))}
      </ul>
      <Pagination
        currentPage={page}
        total={total}
        pageSize={pageSize}
      />
    </div>
  );
}

