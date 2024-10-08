import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <h1 className={s.title}>Welcome to Your Personal Contact Book!</h1>
      <p className={s.subtitle}>
        This site helps you conveniently store and organize your contacts.
      </p>
      <p className={s.subtitle}>To get started, Register or Log in</p>
    </>
  );
};

export default HomePage;
