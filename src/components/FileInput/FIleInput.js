import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const StyledFileInputWrapper = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    box-shadow: 0 0 5px -3px #000;
    border-radius: 5px 5px 0 0 ;
    min-width: 350px;
    max-width: 350px;
    overflow: hidden;
    border-bottom: 4px solid ${({theme})=>theme.primary};
`
const StyledFileInput = styled.input`
    display: none;
`

const StyledFileName = styled.span`
    font-size: 22px;
    text-align: center;
    width: 100%;
    color: ${({theme})=>theme.font};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

const FileInput = ({name, label, value, setValue, ...props}) => {
    const [inputValue, setInputValue] = useState([])
    function handleButtonClick(e){
        fileInputRef.current.click()
    }
    function handleInputChange(e){
        setInputValue(e.target.files)
        setValue && setValue(e.target.files)
    }
    const fileInputRef = useRef()
    return (
        <StyledFileInputWrapper>
            <Button secondary onClick={handleButtonClick}>SELECT</Button>
            <StyledFileName>{value.length > 0 ? value[0].name : label}</StyledFileName>
            <StyledFileInput {...props} onChange={handleInputChange} type="file" ref={fileInputRef} files={value ? value : inputValue}/>
        </StyledFileInputWrapper>
        
    )
}

export default FileInput