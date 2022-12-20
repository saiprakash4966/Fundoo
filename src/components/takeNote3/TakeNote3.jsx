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


function TakeNote3() {
    return (
        <Paper className='NoteOne' style={{ backgroundColor: 'color' }}>
            <Box className='NoteTwo'>
                <Box className='input' onClick='' >

                    
                    
                </Box>
                <Box className='NoteThree'>
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
           
            
                
                    {/* <Box className='Childnote1' style={{ backgroundColor: color }}>
                        <Box className='Childnote2'>
                            <Box className='input' >
                                <InputBase
                                    sx={{ ml: 1, flex: 1,  border: 'px solid red',width:'100%' }}
                                    onChange=''
                                    defaultValue=''
                                    inputProps={{ 'aria-label': 'Take a note....' }}
                                />
                                <InputBase
                                    sx={{ ml: 1, flex: 1,width:'100%' }}
                                    onChange=''
                                    defaultValue=''
                                    inputProps={{ 'aria-label': 'Take a note....' }}
                                />
                            
                            </Box> */}
                            {/* <Box className='Childnote3'>
                                <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
                            </Box>
                        </Box> */}
                        {/* <Box className='Childnote4'>
                            <Box className='childicon' >
                                <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                
                                <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick='' />
                                <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                <UndoOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                <RedoOutlinedIcon sx={{ fontSize: 20 }} />
                                
                            </Box>
                            <Box className='Childbutton'>
                                <Button variant="text" sx={{ color: grey[900] }} onClick=''>Close</Button>
                            </Box>
                        </Box> */}

                    {/* </Box> */}
                
            

        </Paper>
    );
}

export default TakeNote3;