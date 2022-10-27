import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <a href="/" className={css.link}>
        Register
      </a>
      <a href="/" className={css.link}>
        Log In
      </a>
    </div>
  );
};

export default AuthNav;