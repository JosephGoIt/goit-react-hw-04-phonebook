// components/Filter/Filter.jsx
import React, { useContext } from 'react';
import css from './Filter.module.css';
import { ContactContext } from './context/ContactContext';

const Filter = () => {
  const { filter, handleFilterChange } = useContext(ContactContext);

  const onFilterChange = (e) => {
    handleFilterChange(e.target.value);
  };

  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;
