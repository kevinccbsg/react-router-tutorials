import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useFetcher } from 'react-router';
import { useForm, SubmitHandler } from "react-hook-form"

interface FormValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  avatar?: string;
}

const ContactFormHookForm: React.FC = () => {
  const fetcher = useFetcher();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetcher.submit({ ...data }, { method: 'POST', action: '/contacts/new-react-hook-form' });
  };

  // states are available on the fetcher
  const isSubmitting = fetcher.state === 'submitting' && fetcher.formAction === '/contacts/new-react-hook-form';

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Contact</h1>
      <fetcher.Form method='POST' className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label className="mb-2" htmlFor="firstName">First Name</Label>
          <Input type="text" id="firstName" {...register("firstName", { required: true })} />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              First name is required
            </p>
          )}
        </div>
        <div>
          <Label className="mb-2" htmlFor="lastName">Last Name</Label>
          <Input type="text" id="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              Last name is required
            </p>
          )}
        </div>
        <div>
          <Label className="mb-2" htmlFor="username">Username</Label>
          <Input type="text" id="username" {...register("username", { required: true })} />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              Username is required
            </p>
          )}
        </div>
        <div>
          <Label className="mb-2" htmlFor="email">Email</Label>
          <Input type="email" id="email" {...register("email", { required: true })} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              Email is required
            </p>
          )}
        </div>
        <div>
          <Label className="mb-2" htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" {...register("phone", { required: true })} />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              Phone is required
            </p>
          )}
        </div>
        <div>
          <Label className="mb-2" htmlFor="avatar">Avatar (Optional)</Label>
          <Input type="url" id="avatar" {...register("avatar")} />
          {errors.avatar && (
            <p className="text-red-500 text-sm mt-1">
              Avatar URL is invalid
            </p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Contact'}
        </Button>
      </fetcher.Form>
    </div>
  );
};

export default ContactFormHookForm;