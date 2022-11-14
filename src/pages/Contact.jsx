import { useState } from "react";
import FormConfirmModal from "../components/contact/FormConfirmModal";
import FormContact from "../components/contact/FormContact";
import HeaderMain from "../components/HeaderMain";

import "../styles/css/pages/contact.css";
import TitlePage from "../utils/TitlePage";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  return (
    <main className="app-main-container app-contact-container">
      <TitlePage title={"Contact"} />
      <HeaderMain Title={"Contact"} />
      <section className="app-contact-section">
        <FormContact setIsSent={setIsSent} />
        {isSent ? <FormConfirmModal isSent={isSent} /> : ""}
      </section>
    </main>
  );
};

export default Contact;
