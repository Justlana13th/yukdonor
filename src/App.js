import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListPendonor from './pages/ListPendonor';
import Form from './pages/Form';
import SignUp from './pages/SignUp';
import Login from "./pages/Login";



function App() {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route path="/list-pendonor">
                        <ListPendonor/>
                    </Route>
                    <Route path="/form">
                        <Form/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
          </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
