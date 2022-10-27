import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";

import Section from "../../components/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";

export default function Contacts() {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

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