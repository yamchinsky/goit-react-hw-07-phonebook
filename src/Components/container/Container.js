import React from "react";
import { ContactsItemStyled } from "../contacts/ContactsItemStyled";

const Container = ({ children }) => (
  <ContactsItemStyled>{children}</ContactsItemStyled>
);

export default Container;
