// App.jsx
import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
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
          <ContactList />
        </Section>
      </div>
    </ContactProvider>
  );
};

// export default App;
