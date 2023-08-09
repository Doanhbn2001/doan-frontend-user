import { Outlet } from 'react-router-dom';
import './home.css';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import List from '../../components/list/list';
import Note from '../../components/note/note';

const Home = ({ idUser, resetNote, setResetNote }) => {
  return (
    <div>
      <Header></Header>
      <Note
        idUser={idUser}
        resetNote={resetNote}
        setResetNote={setResetNote}
      ></Note>
      <List></List>
      <Outlet></Outlet>
      <Map></Map>
      <Footer></Footer>
    </div>
  );
};

export default Home;
