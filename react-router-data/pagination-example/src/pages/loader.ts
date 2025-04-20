import { fetchContacts, fetchContactTotal } from "@/api/contacts";
import { LoaderFunctionArgs } from "react-router";

export const loadContacts = async ({ request }: LoaderFunctionArgs) => {
  const page = new URL(request.url).searchParams.get("page") || "1";

  const total = await fetchContactTotal();
  const contactData = await fetchContacts({
    page: Number(page),
    pageSize: 2,
  });
  console.log("contactData", contactData);
  
  return {
    contacts: contactData.data,
    page: Number(page),
    pageSize: contactData.pageSize,
    total,
  };
};

export default loadContacts;
