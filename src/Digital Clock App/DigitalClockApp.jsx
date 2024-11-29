import React, {useEffect, useState} from 'react';

function DigitalClockApp(){

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setDate(new Date());
    })
    

    return(
        <div>
            <span>{date.getHours()} : {date.getMinutes().toString().padStart(2, '0')} : {date.getSeconds().toString().padStart(2, '0')}</span>
            
        </div>
    )
}

export default DigitalClockApp;