import React, { useState } from 'react';
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
import { deletedNotesApi, updateArchiveApi, updateNoteApi } from '../../services/dataService';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Modal from '@mui/material/Modal';




function TakeNote3(props) {
    const [inputValue, setInputValue] = useState({ noteId: '', title: '', description: '' })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = (noteDetail) => {

        console.log(noteDetail)
        setOpen(true);
        setInputValue({ noteId: noteDetail.id, title: noteDetail.title, description: noteDetail.description })
    }

    const handleClose = () => setOpen(false);

    const takeTitle = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            title: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeDescription = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            description: event.target.value
        }))
        console.log(event.target.value)
    }

    console.log(props.note)

    const colorUpdate = () => {
        props.getNote()

    }

    const updateArchive = (id) => {
        let input = { noteIdList: [id], isArchived: true }
        updateArchiveApi(input).then(res => {
            console.log(res)
        })
            .catch(error => {
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

    const save = () => {
        updateNoteApi(inputValue).then(
            (response) => {
                console.log(response)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        setOpen(false)

    }


    return (
        <Paper className='NoteOne' style={{ backgroundColor: props.note.color }}>
            <Box className='NoteTwo'>
                <Box className='NoteThree' onClick={() => handleOpen(props.note)}>
                    <p>{props.note.title}</p>
                    <p>{props.note.description}</p>

                </Box>
                <Box className='NoteFour'>
                    <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
                </Box>
            </Box>
            <Box className='iconOne'>
                <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                {/* <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
                <ColorPopper action="update" id={props.note.id} colorUpdate={colorUpdate} />

                {/* <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
                <DeleteForeverOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => trash(props.note.id)} />
                <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => updateArchive(props.note.id)} />
                <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />

            </Box>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ backgroundColor: props.note.color }}>
                    <Box className='Childnoteone'  >
                        <Box className='Childnotetwo' >
                            <Box className='Childnotethree' >
                                <InputBase onChange={takeTitle} defaultValue={inputValue.title} />
                                <InputBase onChange={takeDescription} defaultValue={inputValue.description} />
                            </Box>

                            <Box className='Childnotefour'>
                                <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
                            </Box>
                        </Box>


                        <Box className='Childicon'>
                            <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                            <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                            <ColorPopper action='update' colorUpdate={colorUpdate} id={props.note.id} />
                            {/* <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
                            <DeleteForeverOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => trash(props.note.id)} />
                            <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => updateArchive(props.note.id)} />
                            <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                            <UndoOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                            <RedoOutlinedIcon sx={{ fontSize: 20 }} />

                            
                        </Box>

                        <Box className='close'>
                        <Button variant="text" sx={{ color: grey[900] }} onClick={save}>Close</Button>
                        </Box>













                    </Box>
                </Box>
            </Modal>



        </Paper >

    );
}

export default TakeNote3;