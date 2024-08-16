import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "../../redux/contacts/operations";
import { toast, Toaster } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactsThunk({ name: values.name, number: values.number }))
      .then(() => {
        toast.success("Contact added successfully!");
        resetForm();
      })
      .catch(() => {
        toast.error("Failed to add contact. Please try again.");
      });
  };

  const ContactFormSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  return (
    <>
      <Toaster position="top-right" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={s.form}>
          <h2 className={s.formTitle}>Add new contact</h2>
          <label className={s.fieldTitle}>Name</label>
          <Field
            type="text"
            name="name"
            className={s.formField}
            placeholder="Enter new contact name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
          <label className={s.fieldTitle}>Phone</label>
          <Field
            type="text"
            name="number"
            className={s.formField}
            placeholder="Enter new contact phone"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
          <button type="submit" className={s.addBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
