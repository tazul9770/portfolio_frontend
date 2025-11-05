import { useState } from "react";

const Person = () => {

    const personObj = {
        name : "Tazul Islam",
        age : 24,
        address : "Bokshigonj",
        phone : {
            present : "03656484",
            past : "252356653"
        }
    }

    const [person, setPerson] = useState(personObj);

    const handleClick = () => {
        const newObj = {
            ...personObj,
            name : "moharaz",
            email : "tz@gmail.com",
            phone : {
                ...personObj.phone,
                present : "1234",
                past : "5678"
            }
        }
        setPerson(newObj)
    }

    return (
        <div className="m-5">
            <p>{person.name} {person.age} {person.email}</p>
            <p>{person.phone.present} {person.phone.past}</p>
            <button onClick={handleClick} className="px-3 py-2 bg-blue-600 text-white rounded-sm">Click me</button>
        </div>
    );
};

export default Person;