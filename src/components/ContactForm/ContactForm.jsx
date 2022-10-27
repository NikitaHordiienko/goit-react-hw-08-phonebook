import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsThunks/contactsOperations";
import css from './ContactForm.module.css';
import { selectContacts } from "redux/selectors";

export default function ContactForm() {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    
    const handleSubmit = event => {
        event.preventDefault();       

        const form = event.target;
        const name = form.elements.name.value;
        const phone = form.elements.phone.value
        
        const existingContact = contacts.find(contact =>
            contact.name === name
        );

        if (existingContact) {      
            alert(`${name} is already in contacts`)
            form.reset();
            return 
        }

        dispatch(addContact({name, phone}));

        form.reset();
    }    

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.formLabel} htmlFor="name">Name</label>
            <input
                className={css.formInput}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={css.formLabel} htmlFor="number">Number</label>
            <input
                className={css.formInput}
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.formButton} type="submit">Add contact</button>
        </form>
    )
}