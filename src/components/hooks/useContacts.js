// hooks/useContacts.js
import { useState } from 'react';
import { nanoid } from 'nanoid';

const useContacts = (initialContacts) => {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return { contacts, addContact, deleteContact };
};

export default useContacts;
