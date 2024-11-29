import {useState} from 'react';


export default function MyComponent(){
    
    const [name, setName] = useState(' Guest');
    const [age, setAge] = useState(18)
    const [employe, setEmploye] = useState(true)

    function changeName(){
        setName(' Spongebob');
    }

    const updateAge = () => {
        setAge(age+1)
    }

    const updateEmploye = () => {
        if (employe) {
            setEmploye(false)
        }
        else{
            setEmploye(true)
        }
    }
    
    return(
        <>
            <div>
                <p>Name:{name} </p>
                <button onClick={changeName}>Set Name</button>
                <br/>

                <p>Age: {age} </p>
                <button onClick={updateAge} >Add Age</button>
                <br/>

                <p>is Employed:{employe ? ' Yes' : ' No'} </p>
                <button onClick ={updateEmploye} >Change State</button>
            </div>
        </>
    )
}

