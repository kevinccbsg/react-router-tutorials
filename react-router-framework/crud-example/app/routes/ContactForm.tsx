import { Label } from '@radix-ui/react-label';
import { Form, useNavigation } from 'react-router';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';

import { redirect } from "react-router";
import { createContact, type NewContact } from '~/api/contacts';
import type { Route } from './+types/ContactForm';

export async function action({
  request,
}: Route.ActionArgs) {
  const formData = await request.formData();
  const method = request.method.toUpperCase();

  const handlers: Record<string, () => Promise<Response | null>> = {
    POST: async () => {
      const newContact: NewContact = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        avatar: formData.get('avatar') as string || undefined,
      };
      const newContactResponse = await createContact(newContact);
      return redirect(`/contacts/${newContactResponse.id}`);
    },
  };

  if (handlers[method]) {
    return handlers[method]();
  }
  return null;
};

const ContactForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting' && navigation.formAction === '/contacts/new';
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Contact</h1>
      <Form  method='POST' className="space-y-4">
        <div>
          <Label className="mb-2" htmlFor="firstName">First Name</Label>
          <Input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <Label className="mb-2" htmlFor="lastName">Last Name</Label>
          <Input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <Label className="mb-2" htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" required />
        </div>
        <div>
          <Label className="mb-2" htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <Label className="mb-2" htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <Label className="mb-2" htmlFor="avatar">Avatar (Optional)</Label>
          <Input type="url" id="avatar" name="avatar" />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Contact'}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;