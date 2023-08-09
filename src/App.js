import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import SignIn from './pages/signin/signIn';
import Plants from './components/plants/plants';
import Menu from './components/menu/menu';
import TypeDetail from './components/typeDetail/typeDetail';
import DetailPlant from './components/plantDetail/plantDetail';

function App() {
  const [idUser, setIdUser] = useState(
    JSON.parse(localStorage.getItem('idUser'))
  );
  const [resetNote, setResetNote] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar idUser={idUser} setIdUser={setIdUser}></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                setIdUser={setIdUser}
                idUser={idUser}
                resetNote={resetNote}
                setResetNote={setResetNote}
              />
            }
          >
            <Route path="" element={<Menu></Menu>} />
            <Route path="plants" element={<Plants></Plants>} />
            <Route path="types/:idType" element={<TypeDetail></TypeDetail>} />
            <Route
              path="plants/:idPlant"
              element={
                <DetailPlant
                  idUser={idUser}
                  resetNote={resetNote}
                  setResetNote={setResetNote}
                ></DetailPlant>
              }
            />
          </Route>
          <Route
            exact
            path="/signin"
            element={<SignIn setIdUser={setIdUser} idUser={idUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
