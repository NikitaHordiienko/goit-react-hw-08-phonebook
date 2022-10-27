import css from './LoginForm.module.css';

export default function LoginForm() {

    return (
        <form className={css.form} autoComplete="off">
            <label className={css.formLabel}>
                Email
                <input className={css.formInput} type="email" name="email" />
            </label>
            <label className={css.formLabel}>
                Password
                <input className={css.formInput} type="password" name="password" />
            </label>
            <button className={css.formButton} type="submit">Log In</button>
        </form>
    )
}