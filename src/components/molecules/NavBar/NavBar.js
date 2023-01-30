import styled from "styled-components";
import { routes } from "../../../routes";
import {FiLogOut} from "react-icons/fi"
import {FaRegStickyNote} from "react-icons/fa"
import Link from "../../atoms/Link/Link";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
    background-color: ${({theme})=>theme.primary};
    height: 100vh;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const StyledHeader = styled.header`
    padding: 20px 0;
`

const StyledLinks = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    .active{
        background-color: white;
    }
    a{
        color: ${({theme})=>theme.font};
        padding: 18px;
        display: inline-flex;
        align-items: center;
        border-radius: 22px;
        justify-content: center;
    }
`

const StyledFooter = styled.main`
    padding: 20px 0;
    font-size: 20px;
    a{
        color: ${({theme})=>theme.font};
        padding: 18px;
        display: inline-flex;
        font-size: large;
        align-items: center;
        border-radius: 22px;
        justify-content: center;
    }
`

const NavBar = () => {
    return (
        <StyledNav>
            <StyledHeader>
                <Link font="35px" fontWeight={700} to={routes.notes}>NOTE</Link>
            </StyledHeader>
            <StyledLinks>
                <NavLink to={routes.notes}><FaRegStickyNote/></NavLink>
            </StyledLinks>
            <StyledFooter>
                <NavLink to={routes.logout}><FiLogOut/></NavLink>
            </StyledFooter>
        </StyledNav>
    )
}

export default NavBar