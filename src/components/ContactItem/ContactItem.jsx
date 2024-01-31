import { Item, Name, Number, Button } from "./ContactItem.styled";

import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/operations";

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