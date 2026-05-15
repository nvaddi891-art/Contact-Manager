function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div key={contact._id} className="card">
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>

          <button onClick={() => deleteContact(contact._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;