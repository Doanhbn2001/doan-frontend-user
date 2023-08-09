import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState, useEffect } from 'react';
import API from '../../API/api';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './map.css';

const Map = () => {
  // Khởi tạo thông tin vị trí và zoom mặc định
  const [viewport, setViewport] = useState({
    width: '80vw',
    height: '90vh',
    latitude: 21.004829,
    longitude: 105.932825,
    zoom: 16,
    maxZoom: 20,
    minZoom: 15,
  });

  const [plants, setPlants] = useState([]);

  const [select, setSelect] = useState(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getPlants('');
      if (response.data.error) {
        setError(true);
      } else {
        setPlants(
          response.data.data.filter(
            (p) => !isNaN(+p.longitude) && !isNaN(p.latitude)
          )
        );
      }
    };
    fetchData();
  }, []);
  if (error) return <div>ERROR SERVER</div>;

  return (
    <div className="container">
      <hr></hr>
      <h2 className="text-uppercase fs-4 mb-4 bold pb-3 ">Phân bố thực vật</h2>
      <ReactMapGL
        className="mapp"
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken="pk.eyJ1IjoiZG9hbmgxIiwiYSI6ImNsa2tlcnE3eTBjajAzcW5zbnd3NG9zM2UifQ.acGlcQ582DCOfRtv3cZibA"
      >
        {plants.map((p) => {
          return (
            <Marker
              key={p._id}
              latitude={Number(p.latitude)}
              longitude={Number(p.longitude)}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div className="map-text">{p.name}</div>
              <img
                height={30}
                width={30}
                src="https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png"
                onClick={() => {
                  setSelect(p);
                }}
              ></img>
            </Marker>
          );
        })}

        {select && (
          <Popup
            latitude={Number(select.latitude)}
            longitude={Number(select.longitude)}
            onClose={() => setSelect(null)}
          >
            <div>
              <img src={select.img1}></img>
              <p>{select.name}</p>
              <Link to={`/plants/${select._id}`}>
                <Button color="primary">Chi tiết</Button>
              </Link>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Map;
