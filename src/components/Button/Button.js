
import styled from 'styled-components'
import Icon from '../Icon/Icon'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledButton = styled.button`
    background-color: ${({ secondary, theme }) => secondary ? 'white' : theme.primary};
    outline: 0 solid ${({ theme }) => theme.primary + "88"};
    min-width: ${({icon})=>icon ? "55px" : "156px"};
    width: ${({icon})=>icon ? "55px" : "156px"};
    height: 55px;
    overflow: hidden;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 10px;
    font-size: ${({icon})=>icon ? "24px" : "19px"};
    color: ${({ theme }) => theme.font};
    border-radius: 17px;
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
    min-width: ${({icon})=>icon ? "55px" : "156px"};
    width: ${({icon})=>icon ? "55px" : "156px"};
    height: 55px;
    overflow: hidden;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 10px;
    font-size: ${({icon})=>icon ? "24px" : "19px"};
    color: ${({ theme }) => theme.font};
    border-radius: 17px;
    border: 4px solid ${({ theme }) => theme.primary};
    font-weight: 700;
    transition: outline-width 0.1s;
  
    &:hover{
        outline-width: 3px;

    }
`

const LoadingIcon = styled.span`
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
    const content = icon ? <FontAwesomeIcon icon={icon}/> : children
    return (

        <>
            {Tag === "button" ? <StyledButton
                icon={icon}
                onClick={handleButtonClick}
                secondary={secondary}
                {...props}
            >{loading ? <LoadingIcon><Icon icon={faSpinner} /></LoadingIcon> : content}</StyledButton> : (
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