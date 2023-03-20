import { FormContacts } from '../../components/FormContacts/FormContacts';
import { Section } from '../../components/Section/Section';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import {  useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';


import { fetchContacts } from 'redux/Contact/operations';
import { FallingLines } from 'react-loader-spinner';
import { selectError, selectIsLoading } from 'redux/Contact/selectors';
import { Container,ContactsTitle } from './Contacts.styled';


export default function Contacts(){
  
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
console.log(isLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <FormContacts />
      </Section>

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
        
       {isLoading&&!error?<FallingLines/>:<ContactList /> }
    </Container>
  );
};
