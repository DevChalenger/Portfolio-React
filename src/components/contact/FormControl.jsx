const FormControl = ({
  name,
  label,
  register,
  errors,
  isSubmitted,
  message,
}) => {
  return (
    <div className="app-contact-form-field-container">
      <label
        htmlFor={`app-contact-form-field-${name}`}
        className="app-contact-form-field-label"
      >
        {label} :
      </label>
      <input
        type="text"
        {...register(
          name,
          {
            pattern:
              name === "name"
                ? /^[a-zA-Z]*$/
                : name === "email"
                ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
                : name === "subject"
                ? /^[a-zA-Z ]*$/
                : "",
            required: `Please the ${
              name[0].toUpperCase() + name.slice(1)
            } field is required`,
          },
          {}
        )}
        className={`app-contact-form-field-input ${
          errors[name] ? "notValidate" : isSubmitted ? "validate" : ""
        }`}
        id={`app-contact-form-field-${name}`}
        name={name}
      />
      {errors[name] ? (
        <div className="app-contact-form-field-error">
          {errors[name].type === "pattern" ? message : ""}
          {errors[name].type === "required" ? errors[name].message : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormControl;
