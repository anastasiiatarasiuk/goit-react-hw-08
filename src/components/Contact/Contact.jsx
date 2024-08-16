import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContactsThunk } from "../../redux/contacts/operations";
import { toast, Toaster } from "react-hot-toast";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContactsThunk(id));
      toast.success(`Contact ${name} deleted successfully!`);
    } catch (e) {
      console.log(e.message);
      toast.error("Failed to delete contact. Please try again.");
    }
  };

  return (
    <div className={s.contentContainer}>
      <div className={s.content}>
        <p className={s.contactName}>
          <span className={s.userIcon}>
            <FaUser size={16} />
          </span>
          {name}
        </p>
        <p className={s.contactPhone}>
          <span className={s.userIcon}>
            <FaPhone size={16} />
          </span>
          {number}
        </p>
      </div>
      <button className={s.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
      <Toaster position="top-right" />
    </div>
  );
};

export default Contact;
