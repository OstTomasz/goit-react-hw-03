import css from "./Contact.module.css";

import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export const Contact = () => {
  return (
    <li className={css.contact}>
      <div className={css["contact-info"]}>
        <div className={css["contact-detail"]}>
          <IoMdPerson size="20" className={css["contact-icon"]} />
          <span>Name Surname</span>
        </div>
        <div className={css["contact-detail"]}>
          <FaPhone size="15" className={css["contact-icon"]} />
          <span>000-000-00</span>
        </div>
      </div>
      <button type="button">Delete</button>
    </li>
  );
};
