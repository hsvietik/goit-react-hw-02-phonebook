import React, { Component } from 'react';
import css from './ContactForm.module.css';
export class ContactForm extends Component {
  saveData = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameToAdd = form.elements.name.value;
    const numberToAdd = form.elements.number.value;
    this.props.addContact(nameToAdd, numberToAdd);
    form.elements.name.value = '';
    form.elements.number.value = '';
  };

  render() {
    return (
      <form className={css.contactForm} onSubmit={this.saveData}>
        <label htmlFor="name">Name</label>
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className={css.contactFormInput}
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.contactFormButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
