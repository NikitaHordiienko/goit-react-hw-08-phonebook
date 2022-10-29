import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdPermContactCalendar, MdDelete, MdEdit } from "react-icons/md";
import { deleteContact } from 'redux/contacts/contactsThunks/contactsOperations';
import EditContactModale from 'components/EditContactModal/EditContactModal';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = () => dispatch(deleteContact(contact.id));

    const toggleModal = toggle => {
        setIsModalOpen(toggle)
    }

    return (
        <>
            <li key={contact.id} >
                <div className={css.item}>                    
                    <p className={css.text}> <MdPermContactCalendar /> {contact.name}:</p>
                    <a className={css.phone} href={"tell:" + contact.number}>{contact.number}</a>
                    <button
                        className={css.button}
                        type="button"
                        onClick={() => toggleModal(true)}
                    >
                        <MdEdit />
                    </button>
                    <button
                        className={css.button}
                        type="button"
                        onClick={handleDelete}
                    >
                        <MdDelete />
                    </button>
                </div>            
            </li>
            {isModalOpen &&
                <EditContactModale
                    name={contact.name}
                    number={contact.number}
                    id={contact.id}
                    onClose={toggleModal}
                />
            }
        </>
    )
}

export default ContactListItem;