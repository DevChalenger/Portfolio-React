import FormContact from "../components/contact/FormContact";
import HeaderMain from "../components/HeaderMain";

import "../styles/css/pages/contact.css";

const Contact = () => {
  return (
    <main className="app-main-container app-contact-container">
      <HeaderMain Title={"Contact"} />
      <section className="app-contact-section">
        <FormContact />
      </section>
    </main>
  );
};

export default Contact;
