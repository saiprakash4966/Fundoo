import React, { useState } from 'react';
import { useEffect } from 'react';
import MiniDrawer from '../../components/Drawer/Drawer';
import Header from '../../components/header/Header';
import PrimarySearchAppBar from '../../components/Header1/Header1';
import TakeNote1 from '../../components/takeNote1/TakeNote1';
import TakeNote2 from '../../components/takeNote2/TakeNote2';
import TakeNote3 from '../../components/takeNote3/TakeNote3';
import { getNoteListApi } from '../../services/dataService';

function Dashboard(props) {

    const [toggleNote,setToggleNote] = useState(false)
    const [noteList,setNoteList] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [drawerNote, setDrawerNote] = useState('Notes')

    const listenToTakeNoteOne = () =>
    {
        setToggleNote(true)
    }

    const listenToTakeNoteTwo = () => {
        setToggleNote(false)
    }
    const listenToHeader = () =>
    {
       setDrawerToggle(!drawerToggle)
    }
    const listenToDrawer = (noteDrawer)=>
    {
        setDrawerNote(noteDrawer)
    }
    const getNote = () =>{
        getNoteListApi()
        .then(res =>
            {
                let filterNote = []
                if(drawerNote === 'Notes'){
                   filterNote=res.data.data.data.filter((notes) => {
                    if(notes.isArchived === false && notes.isDeleted === false){
                        return notes
                    }
                   })
                }
                else if(drawerNote === 'Archive'){
                    filterNote=res.data.data.data.filter((notes) => {
                        if(notes.isArchived === true && notes.isDeleted === false){
                            return notes
                        }
                       })
                }
                else if(drawerNote === 'Trash'){
                    filterNote=res.data.data.data.filter((notes) => {
                        if(notes.isArchived === false && notes.isDeleted === true){
                            return notes
                        }
                       })
                }
                console.log(res)
                setNoteList(filterNote)
            })
            .catch(error =>
                {
                    console.log(error)
                })


    }
    useEffect (() => {
        getNote()
       
    },[drawerNote])
    console.log(noteList,'fetching array')

    return (
        <div>
            <PrimarySearchAppBar listenToHeader={listenToHeader} />
            {/* <Header listenToHeader ={listenToHeader}/>  */}
            <MiniDrawer drawerToggle = {drawerToggle} listenToDrawer = {listenToDrawer}/>
            {
                toggleNote ? <TakeNote2 listenToTakeNoteTwo ={listenToTakeNoteTwo}/> : <TakeNote1  listenToTakeNoteOne = {listenToTakeNoteOne}/>  
            }
            <div style={{width : '70vw' , height : 'auto' ,display : 'flex',flexWrap : 'wrap'}}>
            {
                noteList.map((note) =>(<TakeNote3  getNote={getNote} note = {note}/>))
            }
            </div>
           
        </div>
    );
}

export default Dashboard;