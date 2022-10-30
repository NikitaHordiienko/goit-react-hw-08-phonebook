import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addContact } from "redux/contacts/contactsThunks";
import { selectContacts } from "redux/contacts/contactsSelectors";
import css from './ContactForm.module.css';

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    
    const handleSubmit = event => {
        event.preventDefault();       

        const form = event.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value
        
        const existingContact = contacts.find(contact =>
            contact.name === name
        );

        if (existingContact) {   
            toast.error(`${name} is already in contacts`)
            form.reset();
            return 
        }

        dispatch(addContact({name, number}));

        form.reset();
    }    

    return (
        
        <form className={css.cardForm} autoComplete="off" onSubmit={handleSubmit}>
            <div className={css.input}>
                <input
                className={css.inputField}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <label className={css.inputLabel} htmlFor="name">Name</label>
            </div>
            <div className={css.input}>
                <input
                className={css.inputField}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
                <label className={css.inputLabel} htmlFor="number">Number</label>
            </div>            
            <button className={css.formButton} type="submit">Add contact</button>
        </form>
    )
}