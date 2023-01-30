import styled from "styled-components";
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

const MainTemplate = ({children}) => {
    return (
        <StyledWrapper>
            <NavBar/>
            <StyledContent>
                {children}
            </StyledContent>
        </StyledWrapper>
    )
}

export default MainTemplate