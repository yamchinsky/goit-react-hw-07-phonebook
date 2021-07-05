import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filterUpdate } from "../../redux/contacts/contacts-actions";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

function FilterItem({ value, onChangeFilter }) {
  return (
    <div>
      <label className="phonebook-name">
        Find contacts by name
        <br />
        <input
          className="Type-editor-input"
          onChange={onChangeFilter}
          value={value}
          type="text"
        />
      </label>
    </div>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (evt) => {
    console.log(evt);
    dispatch(filterUpdate(evt.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
