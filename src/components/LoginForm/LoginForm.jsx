import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunks';
import css from './LoginForm.module.css';

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
    }

    return (
        <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
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