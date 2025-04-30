import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  favorite: boolean;
  avatar?: string;
}

interface NewContact {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  avatar?: string;
}

// simulate a slow network
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchContacts = async () => {
  const response = await api.get<Contact[]>('/contacts');
  return response.data;
};

export const fetchContactById = async (id: number) => {
  const response = await api.get<Contact>(`/contacts/${id}`);
  return response.data;
};

export const createContact = async (contact: NewContact) => {
  await delay(4000); // Simulate network delay
  const response = await api.post<Contact>('/contacts', contact);
  return response.data;
};

export const deleteContact = async (id: string) => {
  await api.delete(`/contacts/${id}`);
};

export const updateFavoriteStatus = async (id: string, favorite: boolean) => {
  await api.patch(`/contacts/${id}`, { favorite });
};
