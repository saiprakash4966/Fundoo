import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../components/header/Header';
import TakeNote1 from '../../components/takeNote1/TakeNote1';
import TakeNote2 from '../../components/takeNote2/TakeNote2';
import TakeNote3 from '../../components/takeNote3/TakeNote3';
import { getNoteListApi } from '../../services/dataService';

function Dashboard(props) {

    const [toggleNote,setToggleNote] = useState(false)
    const [noteList,setNoteList] = useState([])

    const listenToTakeNoteOne = () =>
    {
        setToggleNote(true)
    }

    const listenToTakeNoteTwo = () => {
        setToggleNote(false)
    }
    const getNote = () =>{
        getNoteListApi()
        .then(res =>
            {
                console.log(res)
                setNoteList(res.data.data.data)
            })
            .catch(error =>
                {
                    console.log(error)
                })


    }
    useEffect (() => {
        getNote()
       
    },[])
    console.log(noteList,'fetching array')

    return (
        <div>
            <Header/>
            {
                toggleNote ? <TakeNote2 listenToTakeNoteTwo ={listenToTakeNoteTwo}/> : <TakeNote1  listenToTakeNoteOne = {listenToTakeNoteOne}/>  
            }
            <div style={{width : '70vw' , height : 'auto' ,display : 'flex',flexWrap : 'wrap',}}>
            {
                noteList.map((note) =>(<TakeNote3  getNote={getNote} note = {note}/>))
            }
            </div>
           
        </div>
    );
}

export default Dashboard;