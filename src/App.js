import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Map from './components/map/map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Home></Home>
        <Map></Map>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
