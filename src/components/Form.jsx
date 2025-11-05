import { useRef } from "react";

const Form = () => {
    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const person = {name:"", age:0}

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nameRef.current != null) person.name = nameRef.current.value
        if (nameRef.current != null) person.age = ageRef.current.value 
        console.log(person);  
    }
    return (
        <div className="m-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input ref={nameRef} id="name" type="text" className="px-3 py-2 border border-blue-600 rounded-b-lg w-full focus:outline-none focus:ring-1 focus:ring-green-700"/>
                <label htmlFor="age">Age: </label>
                <input ref={ageRef} id="age" type="number" className="px-3 py-2 border border-blue-600 rounded-b-lg w-full focus:outline-none focus:ring-1 focus:ring-green-700"/>
                <button className="mt-3 px-3 py-2 text-white bg-blue-500 rounded-md cursor-pointer w-full focus:outline-none focus:ring-1 focus:ring-blue-700">Submit</button>
            </form>
        </div>
    );
};

export default Form;