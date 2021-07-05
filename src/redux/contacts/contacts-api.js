import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

const contactsFetch = () => {
  return axios.get("/contacts").then((response) => response.data);
};

const contactSave = (contact) => {
  return axios.post("./contacts", contact).then(({ data }) => data);
};

const contactRemove = (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};

const filterUpdate = (contactId, update) => {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
};

export default { contactsFetch, contactSave, contactRemove, filterUpdate };
