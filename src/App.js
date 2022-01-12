import {
  BrowserRouter as Router,
  Routes,
  Route, useNavigate
} from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { Calender } from "./Components/Calender";
import { Login } from "./Components/Login";
import { MainPage } from "./Components/MainPage";
import firebase from "firebase";

function App() {
  const [login, setlogin] = useState(false)
  

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} >
        </Route>
        <Route exact path="/login" element={<Login AuthLogin={login} AuthsetLogin={setlogin} />}>
        </Route>
        <Route exact path="/calender" element={<Calender />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
