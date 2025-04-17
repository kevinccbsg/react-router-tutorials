import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Link, useParams } from "react-router"
import { useState } from "react";

interface Contact {
  id: string;
  name: string;
}

export default function Sidebar({ contacts }: { contacts: Contact[] }) {
  const { contactId } = useParams<{ contactId: string }>();
  const [search, setSearch] = useState("");

  const handlesearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Input placeholder="Search..." className="mb-2" value={search} onChange={handlesearchChange} />
      <Button className="w-full" variant="secondary" asChild>
        <Link to="/contacts/new">
          New
        </Link>
      </Button>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 mt-4">
          {filteredContacts.map(contact => (
            <Button
              key={contact.id}
              className="justify-start"
              variant={contact.id === contactId ? "default" : "ghost"}
              asChild
            >
              <Link to={`/contacts/${contact.id}`}>
                {contact.name}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </>
  )
}
