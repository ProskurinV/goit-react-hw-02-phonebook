import { Component } from 'react';
import { MainBox } from './App.styled';
import { nanoid } from 'nanoid';
import FormEl from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';

import Title from 'components/Title/Title';

export default class App extends Component {
  contactId = nanoid();

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerFormSubmit = ({ name, number }) => {
    const nameToRegistr = name.toLowerCase();
    this.addContact(nameToRegistr, number);
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase)
    );
  };

  // findContact = name => {
  //   const { contacts } = this.state;
  //   return contacts.find(item => item.name.toLowerCase() === name);
  // };

  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <MainBox>
        <Title title="Phonebook" />
        <FormEl onSubmit={this.handlerFormSubmit} />
        <Filter
          title="Find contacts by name"
          filter={filter}
          onChange={this.onFilterChange}
        />
        <ContactList
          title="Contacts"
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </MainBox>
    );
  }
}
