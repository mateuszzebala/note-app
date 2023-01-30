import Input from "../components/atoms/Input/Input";
import styled from "styled-components";
import Button from "../components/atoms/Button/Button";
import Heading from "../components/atoms/Heading/Heading";
import Link from "../components/atoms/Link/Link";
import {routes} from '../routes'
import { useEffect, useState } from "react";
import { API, POST } from "../api";
import { useNavigate } from "react-router-dom";

const StyledBackground = styled.div`
    background-color: ${({theme})=>theme.primary};
    min-height: 100vh;
    display: grid;
    place-items: center;
`

const StyledForm = styled.div`
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0 0 10px -7px #000;
    gap: 20px;
    padding: 70px;
    align-items: center;
    background-color: white;
`

function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [buttonLoading, setButtonLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        POST(API.INFO).then(res => {
            if(res.data.user !== null){
                navigate(routes.notes)
            }
        })
    }, [])

    function handleLogIn(e){
        setButtonLoading(true)
        POST(API.SIGNIN, {
            username: username,
            password: password,
        }).then(res => {
            if(res.data.done === true){
                navigate(routes.notes)
            }
            setButtonLoading(false)
        }).catch(err => {
            setButtonLoading(false)
        })
    }

  return (
    <StyledBackground>
        <StyledForm>
            <Heading>SIGN IN</Heading>
            <Input value={username} setValue={setUsername} label="Username"/>
            <Input value={password} setValue={setPassword} label="Password" type="password"/>
            <Button loading={buttonLoading} onClick={handleLogIn}>SIGN IN</Button>
            <Link to={routes.signup}>SIGN UP</Link>
        </StyledForm>
    </StyledBackground>
  )
};

export default Signin;

