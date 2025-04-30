import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useFetcher } from 'react-router';

const ContactForm: React.FC = () => {
  const fetcher = useFetcher()

  // states are available on the fetcher
  const isSubmitting = fetcher.state === 'submitting' && fetcher.formAction === '/contacts/new-custom-validation';
  console.log('fetcher', fetcher);

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Contact</h1>
      <fetcher.Form  method='POST' className="space-y-4" noValidate>
        <div>
          <Label className="mb-2" htmlFor="firstName">First Name</Label>
          <Input type="text" id="firstName" name="firstName" required />
          {fetcher.data?.error && (
            <p className="text-red-500 text-sm mt-1">
              {fetcher.data.error}
            </p>
          )}
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
      </fetcher.Form>
    </div>
  );
};

export default ContactForm;