import { useState } from 'react';
import { Label, Input, Form, Field, Button } from "./ContactForm.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from '../../redux/selectors';

import { addContact } from "../../redux/operations";

const ContactForm = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const handleInputChange = (evt) => {

    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const contactData = {
      name,
      number,
    }
    
    const addedContacts = contacts.find(contact => contact.name === contactData.name);
    if (addedContacts) {
      return alert(`${contactData.name} is already in contacts!`);
    }

    dispatch(addContact (contactData));

    setName('');
    setNumber('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor='user-name'> Name </Label>
        <Input onChange={handleInputChange} value={name} id='user-name' type="text" name="name" required />
      </Field>
      <Field>
        <Label htmlFor='user-phone'> Phone number </Label>
        <Input onChange={handleInputChange} value={number} id='user-phone' type="tel" name="number" required />
      </Field>
      <Button type='submit'>Add contact</Button>
    </Form>
  )
}

export default ContactForm;