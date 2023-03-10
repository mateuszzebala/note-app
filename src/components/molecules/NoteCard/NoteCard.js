import styled from "styled-components";
import Heading from '../../atoms/Heading/Heading'
import { useNavigate } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
    box-shadow: 0 0 10px -7px #000;
    border-radius: 10px;
    display: inline-block;
    min-width: 320px;
    min-height: 230px;
    max-height: 230px;
    max-width: 320px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.3s;
    &:hover{
       box-shadow: 0 0 30px -20px #000;
       transform: scale(1.02);
    }
`
const StyledHeader = styled.header`
    background-color: ${({theme})=>theme.primary};
    border-radius: 10px 10px 0 0;
    padding: 5px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
`




const StyledContent = styled.main`
    padding: 10px;
    overflow: hidden;
    max-height: 80%;
    text-overflow: ellipsis;
`

const NoteCard = ({id, content, title, ...props}) => {
    const navigate = useNavigate();
    function handleCardClick(e){
        navigate(`/note/${id}`)
    }

    return (
        <StyledWrapper onClick={handleCardClick}>
            <StyledHeader>
                <Heading fontWeight={500} font='25px'>{title}</Heading>
            </StyledHeader>
            <StyledContent>
                <Paragraph>{content}</Paragraph>
            </StyledContent>
        </StyledWrapper>
    )
}

export default NoteCard