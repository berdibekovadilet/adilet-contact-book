import React, {useState} from 'react';
import './EditModal.css';

const EditModal = (props) => {
  
    let[name, setName] = useState(props.editContact.name);
    let[surname, setSurname] = useState(props.editContact.surname);
    let[number, setNumber] = useState(props.editContact.number);

    function handleSave (){
        let contact = {...props.editContact}
        contact.name = name;
        contact.surname = surname;
        contact.number = number;

        props.handleSaveTask(contact)

        setName('')
        setSurname('')
        setNumber('')
    }

  

    return (
        <div className='main-modal'>
        <div className='inner-modal'>
            <div className='close'>
                <button>&times;</button>
            </div>
            <input 
                onChange={(e) => setName(e.target.value)}
                type='text' 
                placeholder="Имя"
                value={name} 
                className='inp-edit'
             />

            <input 
                onChange={(e) => setSurname(e.target.value)}
                type='text' 
                placeholder="Фамилия"
                value={surname} 
                className='inp-edit'
             />

            <input 
                onChange={(e) => setNumber(e.target.value)}
                type='text' 
                placeholder="Номер"
                value={number} 
                className='inp-edit'
             />
             
            <button onClick={handleSave}>Save</button>
        </div>
    </div>
    );
};

export default EditModal;