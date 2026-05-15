import { useEffect, useState } from 'react';
import API from './api';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await API.get('/contacts');
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (data) => {
    await API.post('/contacts', data);
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await API.delete(`/contacts/${id}`);
    fetchContacts();
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <ContactForm addContact={addContact} />

        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;