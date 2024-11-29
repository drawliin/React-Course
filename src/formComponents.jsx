import React, {useState} from "react";

export default function FormComponent(){

    const [name, setName] = useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p> {name} </p>
        </div>
    );
}