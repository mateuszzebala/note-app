import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { routes } from "../routes"
import {themes} from '../theme/theme'
import GlobalStyle from '../theme/globaTheme';
import { ThemeProvider } from 'styled-components';
import Notes from "./Notes";
import { useState , useEffect} from "react";
import Account from "./Account";
import Note from "./Note";
import Login from "./Signin";
import Register from "./Signup";
import Logout from "./Logout";

const Root = () => {
    const [theme, setTheme] = useState({})

    useEffect(() => {
        setTheme(themes[0])
        window.addEventListener("keyup", e=>{
            if(e.key === 'ArrowLeft'){
                setTheme(themes[0])
            }
            else if(e.key === 'ArrowRight'){
                setTheme(themes[1])
            }
            else if(e.key === 'ArrowUp'){
                setTheme(themes[2])
            }
            else if(e.key === 'ArrowDown'){
                setTheme(themes[3])
            }
            
        })
    }, []);

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={routes.notes}/>}/>
                        <Route path={routes.notes} element={<Notes/>} />     
                        <Route exact path={routes.account} element={<Account/>} />     
                        <Route exact path={routes.signin} element={<Login/>} />     
                        <Route exact path={routes.signup} element={<Register/>} />     
                        <Route path={routes.note} element={<Note/>} />
                        <Route path={routes.logout} element={<Logout/>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>

    )
}

export default Root

