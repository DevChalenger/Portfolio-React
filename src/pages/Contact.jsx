import FormContact from "../components/contact/FormContact";
import HeaderContact from "../components/contact/HeaderContact";

import "../styles/css/pages/contact.css";

const Contact = () => {
  return (
    <main className="app-main-container app-contact-container">
      <section className="app-contact-section">
        <HeaderContact />
        <FormContact />
      </section>
    </main>
  );
};

export default Contact;
