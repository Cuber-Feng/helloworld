/* eslint-disable react-hooks/purity */
import { useState, useEffect } from 'react';

const Clock = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${monthNames[now.getMonth()]}-${String(now.getDate()).padStart(2, '0')}, ${now.getFullYear()}`;
    const weekday = weekdayNames[now.getDay()];

    // console.log(timezones[0].cities[4].names);
    return (
        <>
            <div id='date' className='onlypc'>
                {formattedDate} &nbsp; {weekday}
            </div>
            <div id='clock' className='onlypc'>
                {hours}:{minutes}:{seconds}
            </div>
        </>
    );
};

export default Clock;