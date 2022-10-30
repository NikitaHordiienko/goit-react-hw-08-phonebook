import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import { editContact } from "redux/contacts/contactsThunks";
import { selectContacts } from "redux/contacts/contactsSelectors";
import css from './EditContactModal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function EditContactModale({ name, number, id, onClose }) {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        const handleCloseKey = event => {
            if (event.code === 'Escape') {
                onClose(false)
            }
        };

        window.addEventListener('keydown', handleCloseKey);

        return () => {
            window.removeEventListener('keydown', handleCloseKey);
        };
    }, [onClose])

    const handleBackDropClick = event => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    };

    const handleEditSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value
        const editedContact = contacts.find(contact => contact.id === id)
        const editedContactInfo = {
            id,
        }

        if (editedContact.name !== name) {
            editedContactInfo.name = name
        }

        if (editedContact.number !== number) {
            editedContactInfo.number = number
        }

        if (editedContact.name === name && editedContact.number === number) {
            toast.warning(`You haven't changed anything.`)
            onClose()
            return 
        }

        const existingContact = contacts.find(contact =>
            contact.name === name
        );

        if (existingContact && editedContactInfo.name === name) {      
            toast.error(`${name} is already in contacts`)
            return 
        }

        dispatch(editContact(editedContactInfo))
        onClose()
    }

    return createPortal(
        <div className={css.overlay} onClick={event => handleBackDropClick(event)} >
            <div className={css.modal}>
                <button className={css.closeButton} type='button' onClick={() => onClose(false)}>
                    <IoClose />
                </button>
                <h2 className={css['card-heading']}>
				    Edit contact
			    </h2>
                <form className={css.form} onSubmit={handleEditSubmit}>
                    <label className={css.formLabel} htmlFor="editName">New name</label>
                    <input
                        className={css.formInput}
                        type="text"
                        name="name"
                        id="editName"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        defaultValue={name}
                        required
                    />
                    <label className={css.formLabel} htmlFor="editNumber">New number</label>
                    <input
                        className={css.formInput}
                        type="tel"
                        name="number"
                        id="editNumber"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        defaultValue={number}
                        required
                    />
                    <button className={css.formButton} type="submit">Save changes</button>
                </form>
            </div>
        </div>,
        modalRoot,
    )
}

EditContactModale.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}