import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormControl from "./FormControl";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const ref = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitted },
  } = useForm();

  const sendForm = (e) => {
    console.log("test");
    emailjs
      .sendForm(
        "service_4m33wxf",
        "template_s2us84a",
        ref.current,
        "1RJFg6DDHkXRgs0Hz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="app-contact-form"
      ref={ref}
      onSubmit={handleSubmit(sendForm)}
      action=""
      method="POST"
    >
      <FormControl
        name={"name"}
        label={"Your Name"}
        register={register}
        errors={errors}
        isSubmitted={isSubmitted}
        message={"Please enter alpabet character"}
      />

      <FormControl
        name={"email"}
        label={"Email"}
        register={register}
        errors={errors}
        isSubmitted={isSubmitted}
        message={"Please enter email format"}
      />

      <FormControl
        name={"subject"}
        label={"Subject"}
        register={register}
        errors={errors}
        isSubmitted={isSubmitted}
        message={"Please only alphabet charater and number is allowed"}
      />

      <div className="app-contact-form-field-container">
        <label
          htmlFor="app-contact-form-field-message"
          className="app-contact-form-field-label"
        >
          Message :
        </label>
        <textarea
          name="message"
          {...register("message", {
            maxLength: {
              value: 500,
              message: "Please the message can't be greater than 500 character",
            },
            required: `Please the message field is required`,
          })}
          className={`app-contact-form-field-textarea ${
            errors.message ? "notValidate" : isSubmitted ? "validate" : ""
          }`}
          id="app-contact-form-field-message"
          cols="30"
          rows="10"
        />
        {errors.message ? (
          <div className="app-contact-form-field-error">
            {errors.message.message}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="app-contact-form-button-container">
        <input type="submit" value="Send" className="app-contact-form-button" />
      </div>
    </form>
  );
};

export default ContactForm;
