import React, {useState} from 'react';
import './EditModal.css';
import "antd/dist/antd.css";
import { Button } from "antd";
import { Input } from 'antd';


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
                <Button size="large" type="disabled" style={{marginBottom: 8}} onClick={handleSave}>&times;</Button>
            </div>
            <Input 
                onChange={(e) => setName(e.target.value)}
                type='text' 
                placeholder="Имя"
                value={name} 
                className='inp-edit'
             />

            <Input 
                onChange={(e) => setSurname(e.target.value)}
                type='text' 
                placeholder="Фамилия"
                value={surname} 
                className='inp-edit'
             />

            <Input 
                onChange={(e) => setNumber(e.target.value)}
                type='text' 
                placeholder="Номер"
                value={number} 
                className='inp-edit'
             />
             
            <Button size="large" type="primary" style={{marginTop: 8}}  onClick={handleSave}>Save</Button>
        </div>
    </div>
    );
};

export default EditModal;