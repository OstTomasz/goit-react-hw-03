import css from "./ContactList.module.css";

import { Contact } from "../Contact/Contact";

export const ContactList = () => {
  return (
    <ul className={css["contact-list"]}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </ul>
  );
};
