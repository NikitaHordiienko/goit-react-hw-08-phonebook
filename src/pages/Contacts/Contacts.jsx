import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectIsLoading } from "redux/contacts/contactsSelectors";
import { fetchContacts } from "redux/contacts/contactsThunks/contactsOperations";


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
        <div>
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <Filter />
                {isLoading && !error && <b>Request in progress...</b>}
                <ContactList />
            </Section>
        </div>
    )
}