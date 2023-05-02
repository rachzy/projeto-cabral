import React from "react";
import "./Contact.css";

import ContactBox, { IContact } from "../../components/ContactBox";

interface IProps {
  contacts: IContact[];
}

const Contact: React.FC<IProps> = ({ contacts }) => {
  function renderContacts() {
    return contacts.map((contact) => {
      return (
        <ContactBox
          key={contact.label}
          label={contact.label}
          href={contact.href}
          icon={contact.icon}
        />
      );
    });
  }
  return (
    <section id="contato">
      <h2 className="subtitle">:. Fale conosco</h2>
      <div className="contact-wrapper">{renderContacts()}</div>
    </section>
  );
};

export default Contact;
