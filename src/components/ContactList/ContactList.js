import React from 'react';
import { Button } from "antd";
import "antd/dist/antd.css";

const ContactList = (props) => {

    let style = {
        listStyleType: "none",
        marginTop: '80px'
    }

    let btnYellow = {
        background: "#fff056",
        color: "black",
        border:'none',
        marginLeft: '5px'
    }

    return (
        <ul style={style}>
             {props.contacts.map((item, index) =>  {
                return (
                    
                            <li key={item.id}>{item.name} {item.surname} {item.number}                        
                            <Button size="large" type="primary" style={{marginLeft: 8}} danger onClick={() => props.handleDelete(item.id)}>&times;</Button>
                            <Button size="large" type="primary" style={btnYellow} onClick={() => props.handleEdit(index)}>Изменить</Button>
                            </li>
                        
                    
                )
             })}


        </ul>
    );
};

export default ContactList;