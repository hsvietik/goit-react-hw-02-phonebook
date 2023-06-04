import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameToAdd = form.elements.name.value;
    const numberToAdd = form.elements.number.value;
    if (this.state.contacts.find(({ name }) => name === nameToAdd)) {
      Notiflix.Notify.failure(`${nameToAdd} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: nameToAdd, number: numberToAdd },
        ],
      }));
    }
    form.elements.name.value = '';
    form.elements.number.value = '';
  };
  findContact = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  deleteContact = evt => {
    let idToDelete = evt.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idToDelete),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter findContact={this.findContact} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
