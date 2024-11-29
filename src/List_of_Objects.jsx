import React, {useState} from 'react';

export default function List_of_Objects(){
    const [cars, setCars] = useState([]);
    const [year, setYear] = useState('');
    const [mark, setMark] = useState('');
    const [model, setModel] = useState('');


    function handleYearChange(event){
        setYear(event.target.value )
    }
    function handleMarkChange(event){
        setMark(event.target.value )
    }
    function handleModelChange(event){
        setModel(event.target.value )
    }

    function onAddCar(){
        setCars(c => [...c, {year: year, mark: mark, model: model}]);
        setYear('');
        setMark('');
        setModel('');
    }

    function onRemoveCar(index){
        setCars(c => c.filter((_, i) => (i != index)))
    }
    
    



    return(
        <div>
            

            <h1>List of Objects</h1>
            <ul>
                {cars.map((car, index) => {
                    return <li key={index} onClick={()=>onRemoveCar(index)}>{car.year} {car.mark} {car.model}</li>
                })}
            </ul>
            <input type='number' value={year} placeholder='Enter Year: ' onChange={handleYearChange}/><br/>
            <input type='text' value={mark} placeholder='Enter Car Mark: ' onChange={handleMarkChange}/><br/>
            <input type='text' value={model} placeholder='Enter Car Model: ' onChange={handleModelChange} /><br/>
            <button onClick={onAddCar}>Add Car</button>




        </div>
    )
}