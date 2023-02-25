import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled..", "success")
      document.title = "AB Developers - Dark Mode"
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled..", "success")
      document.title = "AB Developers - Light Mode"
    }
  }

  return (
    <>

      <Router>
        <Navbar title="AB Developers" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Form showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>

      </Router>
    </>
  );
}
export default App;
