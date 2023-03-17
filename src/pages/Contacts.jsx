import { FormContacts } from '../components/FormContacts/FormContacts';
import { Section } from '../components/Section/Section';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import {  useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';


import { fetchContacts } from 'redux/Contact/operations';
import { FallingLines } from 'react-loader-spinner';
import { selectError, selectIsLoading } from 'redux/Contact/selectors';


export const Contacts = () => {
  
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
console.log(isLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <FormContacts />
      </Section>

      <div>Contacts</div>
      <Filter />
        
       {isLoading&&!error?<FallingLines/>:<ContactList /> }
    </div>
  );
};
