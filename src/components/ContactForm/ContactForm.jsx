import React, { useState } from 'react';

function ContactForm({ onAddContact, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isContactExist(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  const isContactExist = name => {
    return contacts.some(contact => contact.name === name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
