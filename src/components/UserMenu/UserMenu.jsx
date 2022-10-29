import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authThunks';
import css from './UserMenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectUser)

    return (
        <div className={css.wrapper}>
            <p className={css.username}><FaUser /> { email.email }</p>
            <button className={css.button} type="button" onClick={() => dispatch(logOut())} >Log out</button>
        </div>
    )
}

export default UserMenu;