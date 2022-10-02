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
    // filter: '',
    name: '',
    number: '',
  };

  addNewContact = ({ name, number }) => {
    // const { contacts } = this.state;

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, { id: nanoid(), name, number }],
      };
    });
  };

  // handlerFormSunmit = ({ name, number }) => {
  //   const { contacts } = this.state;

  //   this.setState
  //   const nameToRegistr = name.toLowerCase();
  //   this.addNewContact(nameToRegistr, number);
  // };

  render() {
    return (
      <MainBox>
        <Title title="Phonebook" />
        <FormEl onSubmit={this.addNewContact} />
        <Filter title="Find contacts by name" value={this.setState.filter} />
        <ContactList
          title="Contacts"
          // contacts={this.setState.contacts}
        />
      </MainBox>
    );
  }
}
