import styled from "styled-components";

const Paragraph = styled.p`
    font-size: 19px;
    font-weight: 300;
    margin: 0;
    color: ${({theme})=>theme.font};
`

export default Paragraph