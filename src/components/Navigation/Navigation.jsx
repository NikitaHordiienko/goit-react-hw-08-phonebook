import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import css from './Navigation.module.css'

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.linksThumb}>
            <NavLink className={({ isActive }) => (isActive ? css.active : css.link)} to="/homepage">
                Home
            </NavLink>
            {isLoggedIn &&
                <NavLink className={({ isActive }) => (isActive ? css.active : css.link)} to="/contacts">
                    Contacts
                </NavLink>
            }            
        </nav>
    );
};

export default Navigation;