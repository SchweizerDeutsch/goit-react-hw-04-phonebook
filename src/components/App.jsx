import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  // Функция для загрузки контактов из localStorage
  // const loadContactsFromLocalStorage = () => {
  //   try {
  //     const savedContacts = localStorage.getItem('contacts');
  //     return savedContacts ? JSON.parse(savedContacts) : [];
  //   } catch (error) {
  //     console.error('Error loading contacts from localStorage:', error);
  //     return [];
  //   }
  // };

  // // Функция для сохранения контактов в localStorage
  // const saveContactsToLocalStorage = contacts => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // };

  // useEffect(() => {
  //   const loadedContacts = loadContactsFromLocalStorage();
  //   console.log(setContacts(loadedContacts));
  // }, []);

  // useEffect(() => {
  //   saveContactsToLocalStorage(contacts);
  // }, [contacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
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
