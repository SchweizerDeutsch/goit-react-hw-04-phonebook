import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts) {
      const parsedContacts = JSON.parse(saveContacts);
      console.log('Loaded contacts:', parsedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    console.log('Saving contacts:', contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
