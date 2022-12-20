import axios from "axios";

const headerConfig = {
    headers : {
        Authorization : localStorage.getItem("token")

    }
}

export const createNoteApi = (data) =>
{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,headerConfig)
    return response
}

export const getNoteListApi = () =>
{
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
    return response
}