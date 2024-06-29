// components/ContactList/ContactList.jsx
import React, { useContext } from 'react';
import ContactListItem from './ContactListItem';
import { ContactContext } from './context/ContactContext';

const ContactList = () => {
  const { getFilteredContacts, deleteContact } = useContext(ContactContext);
  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;

