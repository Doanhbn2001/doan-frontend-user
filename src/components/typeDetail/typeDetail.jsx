import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './typeDetail.css';
import { FadeTransform } from 'react-animation-components';
import API from '../../API/api';

const TypeDetail = () => {
  const [type, setType] = useState([]);
  const { idType } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getType(idType);
      if (response.data.error) {
        setError(true);
      } else {
        setType(response.data.data);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>ERROR SERVER</div>;
  return (
    <div className="container">
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-30%)',
        }}
      >
        <section>
          <header className="text-center">
            <h2 className=" text-muted bold text-uppercase mb-1 bold">
              Thực vật họ {type && type.name}
            </h2>
            <h2 className="text-uppercase small mb-4">
              {type.plants && type.plants.length} loài thực vật
            </h2>
          </header>
          <div className="col-4 box-search">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Tìm kiếm!"
              // value={search}
              // onChange={handlerSearch}
            />
          </div>

          <div className="row">
            {type.plants &&
              type.plants.map((p) => {
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

export default TypeDetail;
