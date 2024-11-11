import { useId } from "react";
import { Formik, Form, Field } from "formik";

export const SearchBox = () => {
  const searchBoxId = useId();
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className="form">
        <div>
          <label className="label" htmlFor={searchBoxId}>
            Find contacts by name
          </label>
          <Field
            className="field"
            type="text"
            name="search"
            placeholder="Search..."
            id={searchBoxId}
          />
        </div>
      </Form>
    </Formik>
  );
};
