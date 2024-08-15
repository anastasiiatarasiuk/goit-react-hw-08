import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/contacts/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.searchInput}
        type="text"
        value={value}
        placeholder="Enter contact name..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
