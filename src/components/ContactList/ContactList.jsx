import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem/ContactListItem";
import css from './ContactList.module.css';

const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <ul className={css.list}>
            {[...visibleContacts].reverse().map(contact => {
                return (
                    <ContactListItem
                        contact={contact}
                        key={contact.id}
                    />
                )
             })}
        </ul>
    )
}

ContactList.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}

export default ContactList;
