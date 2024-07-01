import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { ContactProvider } from './context/ContactContext';

export const App = () => {
  return (
    <ContactProvider>
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </ContactProvider>
  );
};

// export default App;
