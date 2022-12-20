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


function TakeNote3(props) {

    console.log(props.note)

    return (
        <Paper className='NoteOne' style={{ backgroundColor: 'color' }}>
            <Box className='NoteTwo'>
                <Box className='NoteThree' onClick='' >
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
            <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  onClick=''/>
            <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
           
            </Box>
                
            

        </Paper>
    );
}

export default TakeNote3;