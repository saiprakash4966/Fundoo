import React from 'react';
import './TakeNote1.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputBase from '@mui/material/InputBase';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function TakeNote1() {
    return (
        <Paper className='note1' onClick=''>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Take a note..."
            />
            <Box className='icons'>
                <CheckBoxOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />
                < BrushOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />
                <BrokenImageOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />

            </Box>
        </Paper>
        
    );
}

export default TakeNote1;