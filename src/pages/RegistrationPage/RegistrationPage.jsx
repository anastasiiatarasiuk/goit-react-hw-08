import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state || "/");
  return (
    <>
      <Link className={s.goBack} to={backLinkHref.current}>
        Go back
      </Link>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
