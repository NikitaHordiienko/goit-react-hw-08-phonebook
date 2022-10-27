import css from './UserMenu.module.css'

const UserMenu = () => {

    return (
        <div className={css.wrapper}>
            <p className={css.username}>mango@mail.com</p>
            <button type="button">Logout</button>
        </div>
    )
}

export default UserMenu;