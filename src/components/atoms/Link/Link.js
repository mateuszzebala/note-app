import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const StyledLinkWrapper = styled.span`
    a{
        color: ${({theme})=>theme.font};
        text-decoration: none;
        padding: 4px;
        display: inline-block;
        font-size: ${({font})=>font || '15px'};
        font-weight: ${({fontWeight})=>fontWeight || '300'};
        &::after{
            content: '';
            display: block;
            width: 0;
            border-radius: 10px;
            margin: auto;
            height: 2px;
            transition:  width 0.3s;
            background-color: ${({theme})=>theme.primary};
        }
        &:hover::after{
            opacity: 1;
            width: 100%;
        }
    }

    display: block;
`

const Link = ({to, children, font, fontWeight, ...props}) => {
    return (
        <StyledLinkWrapper font={font} fontWeight={fontWeight}>
            <RouterLink {...props} to={to}>{children}</RouterLink>
        </StyledLinkWrapper>
    )
}

export default Link