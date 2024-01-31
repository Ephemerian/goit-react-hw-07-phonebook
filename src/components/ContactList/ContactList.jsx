import { Wrapper, List } from "./ContactList.styled";

import ContactItem from "components/ContactItem/ContactItem";

import { useSelector } from 'react-redux';
const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter);

    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

    return (
        <Wrapper>
            <List>
                {filterContacts.map((contact) =>
                    <ContactItem
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                    />)}
            </List>
        </Wrapper>
    )
}
export default ContactList;