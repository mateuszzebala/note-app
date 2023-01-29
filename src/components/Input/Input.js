import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import styled from "styled-components"

const StyledWrapper = styled.label`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 0px;
    font-size: 25px;
    border-bottom: 4px solid ${({ theme }) => theme.primary};
    border-radius: 5px 5px 0 0;
    min-width: 350px;
    max-width: 350px;
    box-shadow: 0 0 5px -3px #000;
`

const StyledInput = styled.input`
    border: 0;
    padding: 10px 15px;
    font-size: 20px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color:  ${({ theme }) => theme.font};
    }
`

const StyledTextarea = styled.textarea`
    border: 0;
    resize: none;
    padding: 10px 10px;
    min-height: 200px;
    font-size: 20px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color:  ${({ theme }) => theme.font};
    }
    ::-webkit-scrollbar {
        width: 2px;
    }

`


const Input = ({label, value, setValue, change, icon, textarea, children, ...props }) => {
    const [inputValue, setInputValue] = useState("");
    function handleInputChange(e){
        let val = e.target.value
        if(change){
            val = change(val, e)
        }
        setInputValue(val)
        setValue && setValue(val)
    }
    const Tag = textarea ? StyledTextarea : StyledInput
    return (
        
        <StyledWrapper>
            {icon && <FontAwesomeIcon icon={icon}/>}
            <Tag value={value ? value : inputValue} onChange={handleInputChange} placeholder={label} {...props} />
        </StyledWrapper>
   
    )
}

export default Input