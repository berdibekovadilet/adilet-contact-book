import React, {
    useState
} from 'react';

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
            <input onChange={(e) => setName(e.target.value)} placeholder="Имя" type="text"/>
            <input onChange={(e) => setSurname(e.target.value)} placeholder="Фамилия" type="text"/>
            <input onChange={(e) => setNumber(e.target.value)} placeholder="Номер телефона" type="text"/>
            <button onClick={handleClick}>Добавить</button>
        </div>
    );
};

export default AddContact;