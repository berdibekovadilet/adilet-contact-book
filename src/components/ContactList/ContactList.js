import React from 'react';

const ContactList = (props) => {

    let style = {
        listStyleType: "none",
   
    }

    return (
        <ul style={style}>
             {props.contacts.map((item, index) =>  {
                return (
                 
                    <li key={item.id}>{item.name} {item.surname} {item.number}
                    <button  onClick={() => props.handleDelete(item.id)}>&times;</button>
                    <button  onClick={() => props.handleEdit(index)}>Изменить</button>
                    </li>
                )
             })}


        </ul>
    );
};

export default ContactList;