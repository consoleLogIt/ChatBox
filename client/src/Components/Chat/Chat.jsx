import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

function Chat({ location }) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = "localhost:8000";



    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        // console.log(window.location,"windows loaction")
 
        socket  = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', {name,room}, () => {
        });


        return () =>{
            socket.emit('disconnect');
            socket.off();
        }

    }, [location.search])
    return (
        <div>
            <h1>Chat</h1>
        </div>
    );
}

export default Chat;