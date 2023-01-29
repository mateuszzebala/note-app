import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "../routes"
import {themes} from '../theme/theme'
import GlobalStyle from '../theme/globaTheme';
import { ThemeProvider } from 'styled-components';
import Home from "./Home";
import { useState } from "react";

const Root = () => {
    const [themeID, setThemeID] = useState(1)
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={themes[themeID]}>
                <BrowserRouter>
                    <Routes>
                       <Route exact path={routes.home} element={<Home/>} />     
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>

    )
}

export default Root