import { deleteContact } from "@/api/contacts";
import { ActionFunctionArgs, redirect } from "react-router";

export const contactDetailActions = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const method = request.method.toUpperCase();

  const handlers: Record<string, () => Promise<Response | null>> = {
    DELETE: async () => {
      const id = formData.get("id") as string;
      await deleteContact(id);
      return redirect("/");
    },
  };

  if (handlers[method]) {
    return handlers[method]();
  }

  return null;
};
