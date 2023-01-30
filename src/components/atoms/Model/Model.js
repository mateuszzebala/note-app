import styled from "styled-components"
import {RxCross2} from "react-icons/rx"
import Button from "../Button/Button"
import { useState } from "react"

const StyledWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    z-index: 100;
    background-color: white;
    box-shadow: 0 0 10px -6px #000;
    border-radius: 10px;
`

const StyledContent = styled.div`

`
const StyledExitButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`

const Model = ({children, show, setShow}) => {
    const [showModel, setShowModel] = useState(show ? show : true)
    function handleExitClick(e){
        setShow && setShow(false)
        setShowModel(false)
    }
    if(!show) return null 
    return (
        <StyledWrapper>
            <StyledContent>
                {children}
            </StyledContent>
            <StyledExitButton>
                <Button onClick={handleExitClick} size="40px" icon={<RxCross2/>}/>
            </StyledExitButton>
        </StyledWrapper>
    )
}

export default Model