import { useEffect, useState } from "react";
import styled from "styled-components";
import { API, POST } from "../api";
import NavBar from "../components/molecules/NavBar/NavBar";

const StyledWrapper = styled.div`
    display: flex;
`

const StyledContent = styled.main`
    overflow-y: auto;
    width: 100%;
    max-height: 100vh;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: white;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({theme})=>theme.primary};
    }

`
const StyledUserInfo = styled.div`
    display: flex;
    background-color: ${({theme})=>theme.primary};
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    border-radius: 0 0 0 10px;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    font-size: 22px;
    color: ${({theme})=>theme.font};
    font-weight: 300;
    text-shadow: 0 0 1px #000;
`

const MainTemplate = ({children}) => {
    const [username, setUsername] = useState("")

    useEffect(()=>{
        POST(API.INFO).then(res=>{
            setUsername(res.data.user)
        })
    }, [])

    return (
        <StyledWrapper>
            <NavBar/>
            <StyledContent>
                {children}
            </StyledContent>
            <StyledUserInfo>{username}</StyledUserInfo>
        </StyledWrapper>
    )
}

export default MainTemplate