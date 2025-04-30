import ContactCard from "~/components/ContactCard/ContactCard";
import type { Route } from "./+types/ContactDetail";
import { useContactsLoaderData } from "./Contacts";

import { redirect } from "react-router";
import { deleteContact, updateFavoriteStatus, type Contact } from "~/api/contacts";

export function meta({ matches, params }: Route.MetaArgs) {
  const routeData = matches.find((match) => match?.id === 'routes/Contacts')?.data;
  if (!routeData) {
    return [];
  }
  const { contacts } = routeData as { contacts: Contact[] };
  const contact = contacts.find((c) => c.id === params.contactId);
  return [
    { title: `${contact?.firstName} ${contact?.lastName}` },
    { name: "description", content: `Details about ${contact?.firstName} ${contact?.lastName}` },
  ];
}

export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const method = request.method.toUpperCase();

  const handlers: Record<string, () => Promise<Response | null>> = {
    DELETE: async () => {
      const id = formData.get("id") as string;
      await deleteContact(id);
      return redirect("/");
    },
    PATCH: async () => {
      const id = formData.get("id") as string;
      const favorite = formData.get("favorite") === "true";
      await updateFavoriteStatus(id, favorite);
      return null;
    },
  };

  if (handlers[method]) {
    return handlers[method]();
  }

  return null;
};

const ContactDetail = ({ params }: Route.ComponentProps) =>{
  const { contactId } = params;
  const routeData = useContactsLoaderData();
  if (!routeData) {
    return <div>Loading...</div>;
  }

  const { contacts } = routeData;
  
  // Find the contact locally (outside the store)
  const contact = contacts.find((c) => c.id === contactId);

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <ContactCard
      avatar={contact.avatar}
      name={`${contact.firstName} ${contact.lastName}`}
      username={contact.username}
      favorite={contact.favorite}
      id={contact.id}
    />
  );
}

export default ContactDetail;
