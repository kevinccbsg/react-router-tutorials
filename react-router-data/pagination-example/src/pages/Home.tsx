import { Form, useLoaderData, useNavigation } from "react-router";
import loadContacts from "./loader";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/Pagination/Pagination";

export default function ContactList() {
  const { contacts, page, pageSize, total } = useLoaderData<typeof loadContacts>();
  const navigation = useNavigation();
  const isDeleting = navigation.state === "submitting" && navigation.formMethod === "DELETE";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact List</h1>
      <ul className="divide-y divide-gray-200">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex justify-between items-center py-4">
            <div>
              <p className="font-medium">{`${contact.firstName} ${contact.lastName}`}</p>
              <p className="text-sm text-gray-500">{contact.email}</p>
              <p className="text-sm text-gray-500">{contact.phone}</p>
            </div>
            <Form method="DELETE">
              <input type="hidden" name="id" value={contact.id} />
              <Button
                type="submit"
                variant="destructive"
                disabled={isDeleting && contact.id === navigation.formData?.get("id")}
              >
                Delete
              </Button>
            </Form>
          </li>
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

