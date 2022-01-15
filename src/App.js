import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { Calender } from "./Components/Calender";
import { Login } from "./Components/Login";
import { MainPage } from "./Components/MainPage";
import { Join } from "./Components/Join";
import { Create } from "./Components/Create";
import "./App.css";

function App() {
  const [login, setlogin] = useState(false)
  const [UserData, setUserData] = useState([])
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage setUserData={setUserData} />} >
        </Route>
        <Route exact path="/login" element={<Login AuthsetLogin={setlogin} />}>
        </Route>
        <Route exact path="/calender" element={<Calender UserData={UserData}/>}>
        </Route>
        <Route exact path="/create" element={<Create UserData={UserData}/>}>
        </Route>
        <Route exact path="/join" element={<Join />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
