import styled from "styled-components"
import Button from "../components/atoms/Button/Button"
import Heading from "../components/atoms/Heading/Heading"
import MainTemplate from "../templates/MainTemplate"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import Model from "../components/atoms/Model/Model"
import { useState, useEffect } from "react"
import Input from "../components/atoms/Input/Input"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import { API, POST } from "../api"
import { useNavigate, useParams } from "react-router-dom"
import { routes } from "../routes"

const StyledWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const StyledNoteMenu = styled.div`
    display: flex;
    gap: 20px;
`

const StyledNote = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledDialogButtons = styled.div`
    display: flex;
    padding: 10px 20px;
    gap: 10px;
`

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Note = ({match}) => {
    const {id} = useParams('id')
    const navigate = useNavigate()
    const [showEditForm, setShowEditForm] = useState(false)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [note, setNote] = useState({})
    const [contentInput, setContentInput] = useState("");
    const [titleInput, setTitleInput] = useState("");

    useEffect(() => {
        POST(API.NOTE.GET, {
            id: id
        }).then(res => {
            setNote(res.data)
            setTitleInput(res.data.title)
            setContentInput(res.data.content)
        }).catch(err => { })
    }, [])


    function handleDeleteNote() {
        POST(API.NOTE.DELETE, {
            id: id,
        }).then(res => {
            navigate(routes.notes)
        })
    }

    function handleEditNote() {
        POST(API.NOTE.UPDATE, {
            id: id,
            title: titleInput,
            content: contentInput
        }).then(res => {
            POST(API.NOTE.GET, {
                id: id
            }).then(res => {
                setNote(res.data)
                setTitleInput(res.data.title)
                setContentInput(res.data.content)
            }).catch(err => { })
        })
        setShowEditForm(false)
    }

    return (
        <MainTemplate>
            <StyledWrapper>
                <StyledNote>
                    <Heading>{note.title}</Heading>
                    <Paragraph>{note.content}</Paragraph>
                </StyledNote>
                <StyledNoteMenu>
                    <Button onClick={() => {
                        setShowEditForm(true)
                        setShowDeleteDialog(false)
                    }} icon={<AiFillEdit />} />
                    <Button onClick={() => {
                        setShowDeleteDialog(true)
                        setShowEditForm(false)
                    }} icon={<AiFillDelete />} />
                </StyledNoteMenu>
            </StyledWrapper>
            <Model show={showEditForm} setShow={setShowEditForm}>
                <StyledForm>
                    <Heading>Edit Note</Heading>
                    <Input value={titleInput} setValue={setTitleInput} label="Title" />
                    <Input value={contentInput} setValue={setContentInput} textarea label="Content" />
                    <Button onClick={handleEditNote}>SAVE</Button>
                </StyledForm>
            </Model>
            <Model show={showDeleteDialog} setShow={setShowDeleteDialog}>
                <StyledForm>
                    <Heading>DELETE</Heading>
                    <StyledDialogButtons>
                        <Button secondary onClick={() => setShowDeleteDialog(false)}>NO</Button>
                        <Button onClick={handleDeleteNote}>YES</Button>
                    </StyledDialogButtons>
                </StyledForm>
            </Model>
        </MainTemplate>
    )
}

export default Note