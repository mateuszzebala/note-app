import { BsPlusLg } from "react-icons/bs";
import styled from "styled-components";
import SearchInput from "../components/atoms/SearchInput/SearchInput";
import NoteCard from "../components/molecules/NoteCard/NoteCard";
import MainTemplate from "../templates/MainTemplate";
import Button from "../components/atoms/Button/Button";
import { useEffect, useState } from "react";
import Model from '../components/atoms/Model/Model'
import Input from "../components/atoms/Input/Input";
import Heading from "../components/atoms/Heading/Heading";
import { API, POST } from "../api";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 30px 30px;
`

const StyledTopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  box-shadow: 0 0 10px -8px #000;
  width: 100%;
`
const StyledPlusButton = styled.span`
  position: fixed;
  bottom: 30px;
  right: 30px;
`

const StyledNewNoteForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

function Notes() {
  const [showNewNote, setShowNewNote] = useState(false)
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  useEffect(()=>{
    POST(API.NOTES).then(res => {
      setNotes(res.data.notes)
    }).catch(err => {})
  }, [])

  function handleSearchChange(e){
    POST(API.SEARCH, {
      query: e.target.value
    }).then(res => {
      setNotes(res.data.notes)
    })
    if(e.target.value === ""){
      POST(API.NOTES).then(res => {
        setNotes(res.data.notes)
      }).catch(err => {})
    }
  }

  function handleNewNoteClick(){
    POST(API.NOTE.NEW, {
      title: title,
      content: content,
    }).then(res => {
      POST(API.NOTES).then(res => {
        setNotes(res.data.notes)
      }).catch(err => {})
    })

    setShowNewNote(false)
  }

  return (

    <>
      <MainTemplate>
        <StyledTopBar>
          <SearchInput onChange={handleSearchChange} value={search} setValue={setSearch}/>
        </StyledTopBar>
        <StyledGrid>
          {notes.map(item => (
            <NoteCard 
              id={item.id} 
              title={item.title} 
              key={item.id} 
              content={item.content}
            />
          ))}
        </StyledGrid>
        <StyledPlusButton>
          <Button onClick={()=>setShowNewNote(true)} icon={<BsPlusLg/>}/>
        </StyledPlusButton>
        <Model show={showNewNote} setShow={setShowNewNote}>
          <StyledNewNoteForm>
            <Heading>New Note</Heading>
            <Input value={title} setValue={setTitle} label="Title"/>
            <Input value={content} setValue={setContent} textarea label="Content"/>
            <Button onClick={handleNewNoteClick}>CREATE</Button>
          </StyledNewNoteForm>
        </Model>
      </MainTemplate>
    </>
  );
};

export default Notes;

