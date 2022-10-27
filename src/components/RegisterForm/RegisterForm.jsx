import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunks';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
    }

    return (
        <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <label className={css.formLabel}>
                Name
                <input className={css.formInput} type="text" name="name" />
            </label>
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