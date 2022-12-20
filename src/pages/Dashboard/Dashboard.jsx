import React, { useState } from 'react';
import Header from '../../components/header/Header';
import TakeNote1 from '../../components/takeNote1/TakeNote1';
import TakeNote2 from '../../components/takeNote2/TakeNote2';

function Dashboard(props) {

    const [toggleNote,setToggleNote] = useState(false)

    const listenToTakeNoteOne = () =>
    {
        setToggleNote(true)
    }


    return (
        <div>
            <Header/>
            {
                toggleNote ? <TakeNote2/> : <TakeNote1  listenToTakeNoteOne = {listenToTakeNoteOne}/>  
            }
            
           
        </div>
    );
}

export default Dashboard;