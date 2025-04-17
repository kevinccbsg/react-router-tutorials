import { create } from 'zustand'

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

interface ContactStore {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  removeContact: (id: string) => void;
  markAsFavorite: (id: string) => void;
};

const useStore = create<ContactStore>((set) => ({
  contacts: [],
  addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
  markAsFavorite: (id) => set((state) => ({
    contacts: state.contacts.map(contact =>
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    ),
  })),
  removeContact: (id) => set((state) => ({ contacts: state.contacts.filter(contact => contact.id !== id) })),
}));

export default useStore;
