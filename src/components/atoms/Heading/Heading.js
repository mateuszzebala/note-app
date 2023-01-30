import styled from "styled-components";

const StyledHeading = styled.h1`
    margin: 0;
    color: ${({theme})=>theme.font};
    font-size: ${({font})=>font || '37px'};
    font-weight: ${({fontWeight})=>fontWeight || '700'};
    
`

const Heading = ({children, ...props}) => {
    return (
        <StyledHeading {...props}>{children}</StyledHeading>
    )
}


export default Heading