// context/ContactContext.js
import React, { createContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export const ContactContext = createContext();

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts(prevContacts => [...prevContacts, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const getFilteredContacts = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, filter, handleFilterChange, getFilteredContacts }}>
      {children}
    </ContactContext.Provider>
  );
};
