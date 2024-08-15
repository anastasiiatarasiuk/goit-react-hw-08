import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h2 className={s.formTitle}>Register</h2>
          <label className={s.fieldTitle}>Name</label>
          <Field
            name="name"
            className={s.formField}
            placeholder="Enter your name"
          />
          <label className={s.fieldTitle}>Email</label>
          <Field
            name="email"
            className={s.formField}
            placeholder="Enter your email"
          />
          <label className={s.fieldTitle}>Password</label>
          <Field
            name="password"
            type="password"
            className={s.formField}
            placeholder="Enter your password"
          />
          <button type="submit" className={s.registerBtn}>
            Register
          </button>

          <p className={s.text}>
            You already have account?
            <Link to="/login" className={s.link}>
              Sign in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
