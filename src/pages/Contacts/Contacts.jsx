import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectIsLoading } from "redux/contacts/contactsSelectors";
import { fetchContacts } from "redux/contacts/contactsThunks";
import Loader from "components/Loader/Loader";
import css from './Contacts.module.css';

import Section from "../../components/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.contactsThumb}>
            <Section title="Add new contact">
                <ContactForm />
            </Section>
            <Section title="Your contacts">
                <Filter />
                {isLoading && !error ? <Loader /> : <ContactList  />}
            </Section>
        </div>
    )
}