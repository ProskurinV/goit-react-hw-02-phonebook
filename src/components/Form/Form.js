import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormBook, Input, Label, Btn, Error } from './Form.styled';

let schema = yup.object().shape({
  name: yup.string().required('Please, enter name'),
  number: yup.string().min(10).max(16).required('Please, enter correct number'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function FormEl() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormBook autoComplete="off">
          <Label>
            Name
            <Input
              type="text"
              placeholder="Enter name"
              name="name"
              // value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // onChange={this.handleChange}
            />
            <Error name="name" component="div" />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              placeholder="Enter phone"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // onChange={this.handleChange}
            />
            <Error name="number" component="div" />
          </Label>

          <Btn type="submit">Add contact </Btn>
        </FormBook>
      </Formik>
    </>
  );
}
