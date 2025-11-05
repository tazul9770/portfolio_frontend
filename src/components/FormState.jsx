import { useState } from "react";

const FormState = () => {
    const personObj = {name:"", age:""}

    const [person, setPerson] = useState(personObj)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(person);
    }
    return (
        <div className="m-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name: </label>
                <input onChange={event => setPerson({...person, name:event.target.value})} value={person.name} id="name" type="text" className="px-3 py-2 border border-blue-600 rounded-b-lg w-full focus:outline-none focus:ring-1 focus:ring-green-700"/>

                <label htmlFor="age">Age: </label>
                <input onChange={event => setPerson({...person, age:event.target.value})}    value={person.age} id="age" type="number" className="px-3 py-2 border border-blue-600 rounded-b-lg w-full focus:outline-none focus:ring-1 focus:ring-green-700"/>

                <button className="mt-3 px-3 py-2 text-white bg-blue-500 rounded-md cursor-pointer w-full focus:outline-none focus:ring-1 focus:ring-blue-700">Submit</button>

            </form>
        </div>
    );
};

export default FormState;