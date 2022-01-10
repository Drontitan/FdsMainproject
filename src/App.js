import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Calender } from "./Components/Calender";
import { Login } from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/calender">
          <Calender />
        </Route>
        <Route exact path="/">
          <>
            This is Home Page
          </>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
