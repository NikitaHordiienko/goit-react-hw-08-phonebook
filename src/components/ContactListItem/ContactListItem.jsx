import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunks/contactsOperations';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <li key={contact.id} >
            <div className={css.item}>
                <p className={css.text}>{contact.name}:</p>
                <a className={css.phone} href={"tell:" + contact.number}>{contact.number}</a>
                <button
                    className={css.button}
                    type="button"
                    onClick={handleDelete}
                >Delete</button>
            </div>            
        </li>
    )
}

export default ContactListItem;