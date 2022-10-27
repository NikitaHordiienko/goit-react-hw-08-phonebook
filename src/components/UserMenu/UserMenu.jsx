import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authThunks';
import css from './UserMenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(selectUser)

    return (
        <div className={css.wrapper}>
            <p className={css.username}>{ email.email }</p>
            <button type="button" onClick={() => dispatch(logOut())} >Logout</button>
        </div>
    )
}

export default UserMenu;