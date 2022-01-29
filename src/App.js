import { createContext, useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import GetLink from "./components/GetLink";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import NotMatch from "./components/NotMatch";
import PrivetRoute from './components/PrivetRoute';
import Secret from './components/Secret';

export const UserContext = createContext();

function App() {
  const [isUser, setIsUser] = useState(false)
  return (
    <UserContext.Provider value={[isUser, setIsUser]}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivetRoute />} >
            <Route path="/secret" element={<Secret />} />
            <Route path="/get/:getLink" element={<GetLink />} />
          </Route>
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;