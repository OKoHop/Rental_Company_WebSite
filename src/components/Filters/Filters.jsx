import { Field, Form, Formik } from "formik";

const Filters = () => {
  return (
    <Formik>
      <Form>
        <label>Car brand</label>
        <Field name="carBrand" as="select" placeholder="Enter the text">
          <option value="default">Enter the text</option>
        </Field>

        <label>Price/ 1 hour</label>
        <Field name="price" as="select">
          <option value="to$">To $</option>
        </Field>

        <label>Car mileage/ km</label>
        <Field name="mileageFrom" placeholder="From" />
        <Field name="mileageTo" placeholder="To" />

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default Filters;
