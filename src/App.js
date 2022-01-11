import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import { Calender } from "./Components/Calender";
import { Login } from "./Components/Login";
import { MainPage } from "./Components/MainPage";

function App() {
  const [login, setlogin] = useState(false)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage Login={login} />} >
        </Route>
        <Route exact path="/login" element={<Login />}>
        </Route>
        <Route exact path="/calender" element={<Calender />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
