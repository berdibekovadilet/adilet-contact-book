import React, {useState} from 'react';
import { Button } from "antd";
import "antd/dist/antd.css";
import { Input } from 'antd';
import { Row, Col } from 'antd';

const AddContact = (props) => {

    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [number, setNumber] = useState('');


    function handleClick() {
        let newContact = {
            name: name,
            surname: surname,
            number: number,
            id: Date.now(),
            status: false

        }

        props.handleTask(newContact);


    }


    return (
        <div>
            <Row justify="center" style={{marginTop: 80}}>
            <Col span={4} offset={2}>
                    <Input size="large" onChange={(e) => setName(e.target.value)} placeholder="Имя" type="text"/>
             </Col>
             <Col span={4}>
                    <Input size="large" onChange={(e) => setSurname(e.target.value)} placeholder="Фамилия" type="text"/>
             </Col>
             <Col span={4}>
                    <Input size="large" onChange={(e) => setNumber(e.target.value)} placeholder="Номер телефона" type="text"/>
             </Col>
             <Col span={4}> 
                    <Button size="large" type="primary" onClick={handleClick}>Добавить</Button>
             </Col>
            </Row>
        </div>
    );
};

export default AddContact;


