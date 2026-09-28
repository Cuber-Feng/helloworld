import { useState, useEffect } from 'react';
import timezones from "../data/timezone.json";

const Greeting = () => {
    const [utc, setUTC] = useState((new Date()).getUTCHours());
    const [morningCity, setMorCity] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [nightCity, setNigCity] = useState(null);

    useEffect(() => {
        const utcClock = setInterval(() => {
            setUTC((new Date()).getUTCHours());
        }, 60000);
        return () => clearInterval(utcClock);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect, react-hooks/immutability
        setMorCity(getMorCityName(utc));
        // eslint-disable-next-line react-hooks/immutability
        setNigCity(getNigCityName(utc));
    }, [utc]);

    function getMorCityName(utcH) {
        const cities = timezones[0].cities[(18 - utcH + 24) % 24].names;
        return cities[Math.floor(Math.random() * cities.length)];
    }
    function getNigCityName(utcH) {
        const cities = timezones[0].cities[(2 - utcH + 24) % 24].names;
        return cities[Math.floor(Math.random() * cities.length)];
    }

    // console.log(timezones[0].cities[4].names);
    return (
        <div>
            <div style={{ fontSize: '50px', fontFamily: "'Georgia', Courier, monospace" }}>Good Morning, {morningCity}</div>
            {/* <div style={{ fontSize: '30px' }}>Good Night, {nightCity}</div> */}
        </div>
    );
};

export default Greeting;