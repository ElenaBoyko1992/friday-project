import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperButton from "./s1-UI/common/superButton/SuperButton";
import SuperInputText from "./s1-UI/common/superInputText/SuperInputText";
import SuperCheckbox from "./s1-UI/common/superCheckbox/SuperCheckbox";
import {Route, Routes} from "react-router-dom";
import Test from "./s1-UI/Test";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/login'} element={<div>логинизация</div>}/>
                <Route path={'/registration'} element={<div>регистрация</div>}/>
                <Route path={'/profile'} element={<div>профиль</div>}/>
                <Route path={'/404'} element={<div>404: PAGE NOT FOUND</div>}/>
                <Route path={'/password-recovery'} element={<div>восстановление пароля</div>}/>
                <Route path={'/enter-new-password'} element={<div>ввод нового пароля</div>}/>
                <Route path={'/test'} element={<Test/>}/>
            </Routes>
        </div>
    );
}

export default App;
