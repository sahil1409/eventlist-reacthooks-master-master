import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [events, setEvents] = useState (null);
    //const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
               
                return res.json();
            })
            .then(data => {
                setEvents(data);
            });
    }, [url]);

    return {events};
}

export default useFetch;