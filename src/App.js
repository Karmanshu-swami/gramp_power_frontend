import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDevice from "./Components/AddDevice";
import Dashboard from "./Components/Dashboard";
import GetSingleData from "./Components/GetSingleData";
import Login from "./Components/Login";
import { LoginContext } from './LoginContext';

function App() {
  const [userName, setuserName] = useState(localStorage.getItem('userName'))
  const [userLoginStatus, setuserLoginStatus] = useState(localStorage.getItem('userLoginStatus'))
  return (
    <>
      <Router>
        <LoginContext.Provider value={{ userName, setuserName, userLoginStatus, setuserLoginStatus }}>
          <Routes>
            <Route element={<Login />} path="/"></Route>
            <Route element={<AddDevice />} path="/adddevice"></Route>
            <Route element={<Dashboard />} path="/dashboard"></Route>
            <Route element={<GetSingleData />} path="/getsingledata/:dId"></Route>
          </Routes>
        </LoginContext.Provider>
      </Router>
    </>
  );
}

export default App;