
import styled from 'styled-components'

const StyledIcon = styled.span`
    color: ${({color, theme})=>color ? color : theme.font};
`

const Icon = ({icon}) => {
    return (
        <StyledIcon><icon/></StyledIcon>
    )
}

export default Icon