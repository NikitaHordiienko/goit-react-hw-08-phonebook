import Navigation from "components/Navigation/Navigation";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import css from './AppBar.module.css'

const AppBar = () => {

    return (
        <header className={css.header}>
            <Navigation />
            <AuthNav />
            <UserMenu />
        </header>
    )
}

export default AppBar;