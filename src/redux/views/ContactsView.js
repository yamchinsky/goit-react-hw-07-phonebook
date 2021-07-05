import React, { Component } from "react";
import PhonebookFormItem from "../../Components/phonebookForm/PhonebookFormItem";
import { v4 as uuidv4 } from "uuid";
import FilterItem from "../../Components/filter/FilterItem";
import ContactsList from "../../Components/contacts/ContactsItem";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";

import contactsSelectors from "../../redux/contacts/contacts-selectors";

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  // Отображение имени и телефона, после ввода данных в инпут
  formSubmithandler = (data) => {
    const { contacts } = this.state;
    const dublicateContact = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (dublicateContact) {
      alert(`${dublicateContact.name} is already in contacts!`);
      return;
    }
    const newContact = { name: data.name, number: data.number, id: uuidv4() };
    this.setState((preState) => {
      return { contacts: [...preState.contacts, newContact] };
    });
  };

  render() {
    return (
      <div>
        <PhonebookFormItem />
        <h2 className="contacts-title">Contacts</h2>
        <FilterItem />
        <ContactsList />
        {this.props.isLoadingContacts && <h1>Загружаем</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
