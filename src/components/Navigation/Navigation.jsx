import css from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav>
            <a href='/' className={css.link}>Home</a>
            <a href='/' className={css.link}>Contacts</a>
        </nav>
    );
};

export default Navigation;