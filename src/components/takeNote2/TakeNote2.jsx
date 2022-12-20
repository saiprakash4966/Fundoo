import React from 'react';
import './TakeNote2.css';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


function TakeNote2() 
{

    
    return (
        <Paper className='note2'>
        <Box className='notes1'>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                onChange='Title' 
                placeholder="Title"
                inputProps={{ 'aria-label': 'Take a note....' }}
            />
            <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
        </Box>
        <Box className='note4'>
        <InputBase
            maxRows
            sx={{ ml: 1, flex: 1 }}
            onChange='Title'
            placeholder="Take a note...."
            inputProps={{ 'aria-label': 'Take a note....' }}

        />
        
        </Box>
        <Box className='icons1' >
            <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  />
            <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            {/* <Box>
               
            </Box> */}
            <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  onClick=''/>
            <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            <UndoOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            <RedoOutlinedIcon sx={{ fontSize: 20 }} />
        </Box>
        <Box className='note5'>
        <Button  variant="text" sx={{color: grey[900]}} onClick=''>Close</Button>
        </Box>
        
    </Paper>
    );
}

export default TakeNote2;