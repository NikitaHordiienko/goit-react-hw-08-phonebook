import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiShow, BiHide  } from "react-icons/bi";
import { register } from 'redux/auth/authThunks';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
	const [typePassword, setTypePassword] = useState('password');
	const dispatch = useDispatch();
	
	const showPassword = () => {
        setTypePassword((prevState) => (prevState === 'password' ? 'text' : 'password'));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))

    }

    return (
        <div className={css.card}>
			<h2 className={css['card-heading']}>
				Register
			</h2>
		    <form className={css.cardForm} autoComplete="off" onSubmit={handleSubmit}>
			    <div className={css.input}>
				    <input type="text" name="name" className={css.inputField} required/>
				    <label className={css.inputLabel}>Name</label>
			    </div>
				<div className={css.input}>
				    <input type="text" name="email" className={css.inputField}  required/>
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
				    <button className={css.actionButton} type="submit">Register</button>
			    </div>
		    </form>

	    </div>
    )
}