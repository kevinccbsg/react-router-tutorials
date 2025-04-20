import { useFetcher } from "react-router";
import { Button } from "@/components/ui/button";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
}

export default function DeleteContact({ contact }: { contact: Contact }) {
  // const navigation = useNavigation();
  // const isDeleting = navigation.state === "submitting" && navigation.formMethod === "DELETE";
  const fetcher = useFetcher();
  const isDeleting = fetcher.state === "submitting" && fetcher.formMethod === "DELETE";
  
  return (
    <li className="flex justify-between items-center py-4">
      <div>
        <p className="font-medium">{`${contact.firstName} ${contact.lastName}`}</p>
        <p className="text-sm text-gray-500">{contact.email}</p>
        <p className="text-sm text-gray-500">{contact.phone}</p>
      </div>
      <fetcher.Form method="DELETE">
        <input type="hidden" name="id" value={contact.id} />
        <Button
          type="submit"
          variant="destructive"
          disabled={isDeleting && contact.id === fetcher.formData?.get("id")}
        >
          Delete
        </Button>
      </fetcher.Form>
    </li>    
  );
}

