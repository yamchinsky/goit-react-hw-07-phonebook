import axios from "axios";

import {
  contactSaveRequest,
  contactSaveSuccess,
  contactSaveError,
  contactRemoveRequest,
  contactRemoveSuccess,
  contactRemoveError,
  fetchRequest,
} from "../../redux/contacts/contacts-actions";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContacts(data));
  } catch (error) {}
  // axios
  //   .get("/contacts")
  //   .then(({ data }) => dispatch(fetchSuccess(data)))
  //   .catch((error) => dispatch(fetchError(error)));
};

export const contactSave = (contact) => (dispatch) => {
  dispatch(contactSaveRequest());
  axios
    .post("./contacts", contact)
    .then(({ data }) => {
      console.log(data);
      dispatch(contactSaveSuccess(data));
    })
    .catch((error) => dispatch(contactSaveError(error)));
};

export const contactRemove = (contactId) => (dispatch) => {
  dispatch(contactRemoveRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactRemoveSuccess(contactId)))
    .catch((error) => dispatch(contactRemoveError(error)));
};

export default {
  contactSave,
  contactRemove,
  fetchContacts,
};
