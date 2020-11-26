import React, {useState} from 'react';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditModal from './components/EditModal/EditModal';


function App() {

  let [contacts, setContacts] = useState([]);
  let [modal, setModal] = useState(false);
  let [editContact, seteditContact] = useState({});


  function handleTask(value){
    let newContact = [...contacts];

    newContact.push(value)
    setContacts(newContact)
  }

  function handleDelete(id){
    let newContact = contacts.filter(item => {
      return item.id !== id
    })
    setContacts(newContact)
  }

  function handleEdit(index){
    setModal(true)
    seteditContact(contacts[index])
  }

  function handleSaveTask(newAdd){
    let newContact = contacts.map(item => {
      if(item.id === newAdd.id){
        return newAdd 
      }
      return item
    })

    setContacts(newContact)
    setModal(false)
  }

  return (
    <div className="App">
      <AddContact handleTask={handleTask} />
      <ContactList 
         contacts={contacts}
         handleDelete={handleDelete}
         handleEdit={handleEdit}
      />
      {modal ? 
      <EditModal 
      editContact={editContact}
      handleSaveTask={handleSaveTask}
    />
  : null}
    </div>
  );
}

export default App;
