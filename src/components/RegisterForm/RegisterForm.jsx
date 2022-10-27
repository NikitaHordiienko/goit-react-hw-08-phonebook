import css from './RegisterForm.module.css'

export default function RegisterForm() {

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
            <button className={css.formButton} type="submit">Register</button>
        </form>
    )
}