import React, {useEffect, useState} from 'react';

function DigitalClockApp(){

    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        let intervalId = setInterval(() => {

            setDate(new Date());

        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
        

        
    }, []);


    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let meridiem = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12 || 12;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${meridiem}`;
        
    }

    return(
        <div className='timerApp'>
            <span>{formatTime()}</span>
            
        </div>
    )
}

export default DigitalClockApp;