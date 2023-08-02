import { Route, Routes, useLocation } from 'react-router-dom';
import './home.css';
import Menu from '../../components/menu/menu';
import DetailPlant from '../../components/plantDetail/plantDetail';
import TypeDetail from '../../components/typeDetail/typeDetail';
import Plants from '../../components/plants/plants';
import Map from '../../components/map/map';

const Home = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:idPlant" element={<DetailPlant />} />
        <Route path="/types/:idType" element={<TypeDetail />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
};

export default Home;
