import React from "react";
import PropTypes from "prop-types";
import { ContactsItemStyled } from "./ContactsItemStyled";
import { connect } from "react-redux";
import { contactRemoveSuccess } from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

const ContactsItem = ({ name, number, onClickRemove }) => {
  return (
    <li className="contacts-item">
      <p>
        {name}: {number}
      </p>
      <button type="button" className="delete-button" onClick={onClickRemove}>
        Delete
      </button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  return (
    contacts.length > 0 && (
      <ContactsItemStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onRemove(id)}
          />
        ))}
      </ContactsItemStyled>
    )
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (contactId) => dispatch(contactRemoveSuccess(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
