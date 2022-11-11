import { ReactComponent as Send } from "../../assets/SVG/send.svg";

const FormConfirmModal = ({ isSent }) => {
  return (
    <section className="app-contact-form-modal-section">
      <div className="app-contact-form-modal-container">
        <div className="app-contact-form-modal-icon-container">
          <div className="app-contact-form-modal-icon-success-container">
            <div className="app-contact-form-modal-icon-success"></div>
          </div>
          <Send
            className={`app-contact-form-modal-icon-send ${
              isSent ? "animated" : ""
            }`}
          />
        </div>

        <p>Your email has been sent thank you</p>
      </div>
    </section>
  );
};

export default FormConfirmModal;
