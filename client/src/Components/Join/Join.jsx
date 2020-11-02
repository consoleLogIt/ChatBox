import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';

import styles from './Join.module.css'

function Join(props) {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    return (
        <div className = {styles.joinOuterContainer}>
            <div className = {styles.joinInnerContainer}>
               <div><input placeholder = "Name" className ={styles.joinInput}  type = "text" onChange = {(e)=> setName(e.target.value)} /></div>
               <div><input placeholder = "Room" className ={cx(styles.joinInput,styles.mt20)} type = "text" onChange = {(e)=> setRoom(e.target.value)} /></div> 
               <Link  onClick = {(e) => (!name || !room )? e.preventDefault():null } to = {`/chat?name=${name}&room = ${room}`}>
               <button className = {cx(styles.button,styles.mt20)} type="submit">Sign In</button>
               </Link> 
            </div> 
        </div>
    );
}

export default Join; 