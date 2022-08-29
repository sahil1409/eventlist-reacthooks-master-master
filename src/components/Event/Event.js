import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import useFetch from '../useFetch';
const Event = ({ item }) => {
    const { deleteEvent } = useContext(GlobalContext);
    const { events} = useFetch("http://localhost:8001/events");
    return (  
        <li>
            <span className="Event">{item.event}</span>
            <span className="Time">{item.time}</span>
            <span className="Action" onClick={() => deleteEvent(item.id)}>&#10007;</span>
        </li>
        
        
    );
}

export default Event;