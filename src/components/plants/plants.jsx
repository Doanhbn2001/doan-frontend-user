import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './plants.css';
import { FadeTransform } from 'react-animation-components';

const Plants = () => {
  const [plants, setPlants] = useState([]);

  const [search, setSearch] = useState('');

  const [error, setError] = useState(false);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/plants//get-all-plants?search=${search}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPlants(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [search]);
  return (
    <div className="container">
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)',
        }}
      >
        <section>
          <header className="text-center">
            <h2 className="text-uppercase fs-4 mb-4 bold ">
              Các loài thực vật
            </h2>
          </header>
          <div className="col-4 box-search">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Tìm kiếm!"
              value={search}
              onChange={handlerSearch}
            />
          </div>

          <div className="row">
            {plants &&
              plants.map((p) => {
                return (
                  <div className="col-4 box-plant" key={p._id}>
                    <Link
                      to={`/plants/${p._id}`}
                      key={p._id}
                      className="box-plant"
                    >
                      <img src={p.img1} className="img-plant" />
                      <p className="bold title-plant">{p.name}</p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </FadeTransform>
    </div>
  );
};

export default Plants;
