import React from 'react';
import './TakeNote3.css';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { color } from '@mui/system';
import ColorPopper from '../ColorPopper/ColorPopper';
import { deletedNotesApi, updateArchiveApi } from '../../services/dataService';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';



function TakeNote3(props) {

    console.log(props.note)

    const colorUpdate = ()=>
    {
        props.getNote()

    }

    const updateArchive = (id) =>
    {
        let input = {noteIdList : [id], isArchived : true}
        updateArchiveApi(input).then ( res =>
            {
                console.log(res)
            }) 
            .catch(error =>
                {
                    console.log(error)
                })

    }
    const trash = (id) => {
        
        let trash = {
            noteIdList: [id], isDeleted: true
        }
        
        deletedNotesApi(trash).then(
            response => {
                console.log(response)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }



    return (
        <Paper className='NoteOne' style={{ backgroundColor: props.note.color }}>
            <Box className='NoteTwo'>  
                <Box className='NoteThree'>
                <p>{props.note.title}</p>
                    <p>{props.note.description}</p> 
                    
                </Box>
                <Box className='NoteFour'>
                    <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
                </Box>
            </Box>
            <Box className='iconOne'>
            <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  />
            {/* <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
            <ColorPopper action="update" id={props.note.id} colorUpdate = {colorUpdate}/>

            {/* <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
            <DeleteForeverOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => trash(props.note.id)} />
            <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  onClick={ () => updateArchive(props.note.id)} />
            <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
           
            </Box>
                
            

        </Paper>
    );
}

export default TakeNote3;