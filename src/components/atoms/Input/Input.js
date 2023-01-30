import { useState, useEffect } from "react"
import styled from "styled-components"

const StyledWrapper = styled.label`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0px;
    font-size: 25px;
    border-bottom: 4px solid ${({ theme, error }) => error ? "red" : theme.primary};
    border-radius: 5px 5px 0 0;
    min-width: 350px;
    max-width: 350px;
    box-shadow: 0 0 5px -3px #000;
    position: relative;
`

const StyledInput = styled.input`
    border: 0;
    padding: 15px 10px;
    font-size: 20px;
    font-weight: 300;
    width: 100%;
    transform: translateY(5px);
    background-color: transparent;
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
    padding: 15px 10px;
    font-weight: 300;
    width: 100%;
    min-height: 200px;
    font-size: 20px;
    transform: translateY(5px);
    background-color: transparent;
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


const StyledIcon = styled.span`
    display: inline-block;
    max-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`

const StyledPlaceHolder = styled.span`
    font-weight: 300;
    font-size: ${({focus})=>focus ? "11px" : "20px"};
    position: absolute;
    top:15px;
    color: gray;
    transform: translateY(${({focus})=>focus ? "-13px" : "0"});
    left: ${({icon})=>icon ? '35px' : '10px'};
    padding: 0 10px;
    transition: font-size 0.2s, transform 0.2s;
`


const Input = ({label, error, value, setValue, change, icon, textarea, children, ...props }) => {
    const [inputValue, setInputValue] = useState("");
    const [focus, setFocus] = useState("");

    useEffect(() => {
        if(inputValue !== "" || value) setFocus(true)
    }, [inputValue, value]);

    function handleInputChange(e){
        let val = e.target.value
        if(change){
            val = change(val, e)
        }
        setInputValue(val)
        setValue && setValue(val)
    }

    function handleInputFocus(e){
        setFocus(true)
    }

    function handleInputBlur(e){
        if(inputValue === "" && !value ) setFocus(false)
    }

    const Tag = textarea ? StyledTextarea : StyledInput
    return (
        
        <StyledWrapper error={error}>
            <StyledIcon>{icon && icon}</StyledIcon>
            <StyledPlaceHolder icon={icon} focus={focus}>{label}</StyledPlaceHolder>
            <Tag
                
                onBlur={handleInputBlur}  
                onFocus={handleInputFocus}  
                value={value ? value : inputValue} 
                onChange={handleInputChange} 
                {...props} 
            />
        </StyledWrapper>
   
    )
}

export default Input