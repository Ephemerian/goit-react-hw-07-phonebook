import { Item, Name, Number, Button } from "./ContactItem.styled";

import { deleteContact } from "../../redux/contactsSlice";

import { useDispatch } from "react-redux";

const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <Item>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <Button onClick={handleDelete} >Delete</Button>
        </Item>
    )
}
export default ContactItem;