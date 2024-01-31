import { Wrapper, List } from "./ContactList.styled";

import ContactItem from "components/ContactItem/ContactItem";
import Loader from "components/Loader/Loader";

import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from "../../redux/operations";

import { useEffect } from "react";

import { selectIsLoading, selectFilterContacts } from '../../redux/selectors';

const ContactList = () => {
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filterContacts = useSelector(selectFilterContacts);

    return (
        <>
            {isLoading && <Loader />}
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
        </>
    )
}
export default ContactList;