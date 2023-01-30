
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {VscLoading} from 'react-icons/vsc';

const StyledButton = styled.button`
    background-color: ${({ secondary, theme }) => secondary ? 'white' : theme.primary};
    outline: 0 solid ${({ theme }) => theme.primary + "88"};
    min-width: ${({icon, size})=>icon ? (size || "55px") : "156px"};
    width: ${({icon, size})=>icon ? (size || "55px") : "156px"};
    min-height: ${({size})=>(size || "55px")};
    height: ${({size})=>(size || "55px")};
    overflow: hidden;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: ${({icon})=>icon ? "24px" : "19px"};
    color: ${({ theme }) => theme.font};
    border-radius: ${({icon})=>icon ? "30%" : "17px"};
    border: 4px solid ${({ theme }) => theme.primary};
    font-weight: 700;
    transition: outline-width 0.1s;
  
    &:hover{
        outline-width: 3px;

    }

`

const StyledLinkWrapper = styled.div`
    text-decoration: none !important;
`

const StyledLink = styled.span`
    background-color: ${({ secondary, theme }) => secondary ? 'white' : theme.primary};
    outline: 0 solid ${({ theme }) => theme.primary + "88"};
    min-width: ${({icon, size})=>icon ? (size || "55px") : "156px"};
    width: ${({icon, size})=>icon ? (size || "55px") : "156px"};
    height: ${({size})=>(size || "55px")};
    overflow: hidden;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: ${({icon})=>icon ? "24px" : "19px"};
    color: ${({ theme }) => theme.font};
    border-radius: ${({icon})=>icon ? "10%" : "17px"};
    border: 4px solid ${({ theme }) => theme.primary};
    font-weight: 700;
    transition: outline-width 0.1s;
  
    &:hover{
        outline-width: 3px;

    }
`

const LoadingIcon = styled.span`
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    @keyframes spin {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    animation: spin 2s linear infinite;


`


const Button = ({ to, children, secondary, loading, icon, onClick, ...props }) => {
    function handleButtonClick(e) {
        if (!loading) {
            if (onClick) {
                onClick(e)
            }
        }
    }

    const Tag = to ? "a" : "button"
    const content = icon ? icon : children
    return (

        <>
            {Tag === "button" ? <StyledButton
                icon={icon}
                onClick={handleButtonClick}
                secondary={secondary}
                {...props}
            >{loading ? <LoadingIcon><VscLoading/></LoadingIcon> : content}</StyledButton> : (
                <>
                    <StyledLinkWrapper>
                        <Link to={to}>
                            <StyledLink
                                secondary={secondary}
                                icon={icon}
                                {...props}
                            >
                                {content}
                            </StyledLink>
                        </Link>
                    </StyledLinkWrapper>
                </>
            )}
        </>


    )
}


export default Button