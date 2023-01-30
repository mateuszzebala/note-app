import styled from "styled-components"
import {RxMagnifyingGlass} from 'react-icons/rx'
import { useState } from "react"

const StyledInputWrapper = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px;
    height: 36px;
    font-size: 40px;
    width: 220px;
    border-radius: 12px;
    background-color: #F0EFEF;
`

const StyledInput = styled.input`
    border: 0;
    font-size: 15px;
    background-color: transparent;
    font-weight: 300;
    overflow: hidden;
    ::placeholder{
        font-weight: lighter;
    }
    &:focus{
        outline: none;
    }
`

const StyledGlassIcon = styled.div`
    font-size: 21px;
    display: flex;
    align-items: center;
    color: ${({theme})=>theme.font};
    justify-content: center;
    margin-left:14px;
`

const SearchInput = ({label, value, setValue, onChange, ...props}) => {
    function handleInputChange(e){

        setValue(e.target.value)
		onChange(e)
    }

    return (
        <StyledInputWrapper>
            <StyledGlassIcon>
                <RxMagnifyingGlass/>
            </StyledGlassIcon>
            <StyledInput onChange={handleInputChange} {...props} value={value} placeholder={label || "SEARCH"}/>
        </StyledInputWrapper>
    )
}

export default SearchInput