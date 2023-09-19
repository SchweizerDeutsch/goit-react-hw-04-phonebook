import React from 'react';
import ContactDelete from 'components/ContactDelete/ContactDelete';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  console.log('contacts:', contacts);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <div key={contact.id}>
          <ContactDelete contact={contact} onDeleteContact={onDeleteContact} />
        </div>
      ))}
    </ul>
  );
};

export default ContactList;
