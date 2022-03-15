import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPendonor from './pages/ListPendonor';
import Form from './pages/Form';
import SignUp from './pages/SignUp';
import Login from "./pages/Login";
import Home from "./pages/Home";




function App() {

  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/list-pendonor" element={<ListPendonor />} />
            <Route path="/form" element={<Form />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
