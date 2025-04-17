import ContactCard from "@/components/ContactCard/ContactCard";
import useStore from "@/store/contacts";
import { useParams } from "react-router";

const ContactDetail = () => {
  const { contactId } = useParams<{ contactId: string }>();

  // Just read contacts from the store
  const contacts = useStore((state) => state.contacts);

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
