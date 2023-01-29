
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledIcon = styled.span`
    color: ${({color, theme})=>color ? color : theme.font};
`

const Icon = ({icon}) => {
    return (
        <StyledIcon><FontAwesomeIcon icon={icon}/></StyledIcon>
    )
}

export default Icon