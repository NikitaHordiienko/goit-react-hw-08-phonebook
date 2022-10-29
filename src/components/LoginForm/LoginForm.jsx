import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiShow, BiHide  } from "react-icons/bi";
import { logIn } from 'redux/auth/authThunks';
import css from './LoginForm.module.css';

export default function LoginForm() {
    const [typePassword, setTypePassword] = useState('password');
    const dispatch = useDispatch();

    const showPassword = () => {
        setTypePassword((prevState) => (prevState === 'password' ? 'text' : 'password'));
    }

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

        <div className={css.card}>
			<h2 className={css['card-heading']}>
				Log In
			</h2>
		    <form className={css.cardForm} autoComplete="off" onSubmit={handleSubmit}>
				<div className={css.input}>
				    <input type="email" name="email" className={css.inputField}  required/>
				    <label className={css.inputLabel}>Email</label>
			    </div>
				<div className={css.input}>
				    <input type={typePassword} name="password" className={css.inputField} required/>
                    <label className={css.inputLabel}>Password</label>
                    <button className={css.passwordButton} type='button' onClick={showPassword} >
                        {typePassword === 'password' ? <BiShow /> : <BiHide />}
                    </button>
			    </div>
			    <div className={css.action}>
				    <button className={css.actionButton} type="submit">Log In</button>
			    </div>
		    </form>

	    </div>
    )
}