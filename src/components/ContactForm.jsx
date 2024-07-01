import React, { useState, useContext } from 'react';
import css from './ContactForm.module.css';
import { ContactContext } from '../components/context/ContactContext';

const ContactForm = () => {
  const { contacts, addContact } = useContext(ContactContext);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const nameExists = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (nameExists) {
      alert(`${name} already exists in contacts!`);
      return;
    }

    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formField}>
        <p className={css.formLabel}>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Enter name"
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          required
          placeholder="Enter number"
        />
      </label>

      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
