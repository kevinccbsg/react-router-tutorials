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
}

interface NewContact {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

// simulate a slow network
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

interface PaginateFilter {
  page: number;
  pageSize: number;
}

interface ContactResponse {
  data: Contact[];
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
}

export const fetchContactTotal = async (): Promise<number> => {
  const response = await api.get<Contact[]>('/contacts');
  return response.data.length;
};

export const fetchContacts = async (filters: PaginateFilter): Promise<PaginatedResponse<Contact>> => {
  let path = '/contacts';
  const { page, pageSize } = filters;
  if (page && pageSize) {
    path += `?_page=${page}&_per_page=${pageSize}`;
  }
  const response = await api.get<ContactResponse>(path);
  return {
    data: response.data.data,
    page,
    pageSize,
    total: response.data.data.length,
  };
};

export const createContact = async (contact: NewContact) => {
  const response = await api.post<Contact>('/contacts', contact);
  return response.data;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const deleteContact = async (id: string) => {
  await delay(5000);
  await api.delete(`/contacts/${id}`);
};
