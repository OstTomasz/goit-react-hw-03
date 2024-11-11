import css from "./ContactForm.module.css";

import { useId } from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="form">
        <div>
          <label className="label" htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className="field"
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <label className="label" htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className="field"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}"
            name="number"
            id={numberFieldId}
            placeholder="xxx-xxx-xx"
            required
          />
        </div>
        <button className={css["submit-btn"]} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
