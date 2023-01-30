import Input from "../components/atoms/Input/Input";
import styled from "styled-components";
import Button from "../components/atoms/Button/Button";
import Heading from "../components/atoms/Heading/Heading";
import Link from "../components/atoms/Link/Link";
import {routes} from '../routes'
import {API, POST} from "../api"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [buttonLoading, setButtonLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
      POST(API.INFO).then(res => {
          if(res.data.user !== null){
              navigate(routes.notes)
          }
      })
  }, [])


  function handleSignUp(e){
      setButtonLoading(true)
      POST(API.SIGNUP, {
          username: username,
          email: email,
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
            <Heading>SIGN UP</Heading>
            <Input value={username} setValue={setUsername} label="Username"/>
            <Input value={email} setValue={setEmail} label="Email" type="email"/>
            <Input value={password} setValue={setPassword} label="Password" type="password"/>
            <Button loading={buttonLoading} onClick={handleSignUp}>SIGN UP</Button>
            <Link to={routes.signin}>SIGN IN</Link>
        </StyledForm>
    </StyledBackground>
  )
};

export default Signup;

