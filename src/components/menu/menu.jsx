import { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import './menu.css';
import API from '../../API/api';
import { FadeTransform } from 'react-animation-components';

const Menu = () => {
  const [types, setTypes] = useState([]);

  const [totalPage, setTotalPage] = useState(9);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const [error, setError] = useState(false);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const onDownPage = () => {
    setPage(page - 1);
  };
  const onUpPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getTypes(search, page);
      if (response.data.error) {
        setError(true);
      } else {
        setTypes(response.data.data);
        setTotalPage(Math.ceil(response.data.length / 12));
      }
    };
    fetchData();
  }, [page, search]);

  if (error) return <div>ERROR SERVER</div>;
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
            <h2 className="text-uppercase fs-4 mb-4 bold ">Họ thực vật</h2>
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
            {types &&
              types.map((p) => {
                return (
                  <div className="col-4" key={p._id}>
                    <Link
                      to={`/types/${p._id}`}
                      key={p._id}
                      className="box-type"
                    >
                      <Card className="box-content">
                        <CardBody>
                          {!p.plants[0] ? (
                            <div></div>
                          ) : (
                            <CardImg
                              src={`${p.plants[0].img1}`}
                              className="icon"
                            ></CardImg>
                          )}
                          <CardTitle className="bold">{p.name}</CardTitle>
                          <CardTitle>{p.plants.length} loài thực vật</CardTitle>
                        </CardBody>
                      </Card>
                    </Link>
                  </div>
                );
              })}
          </div>

          <nav aria-label="Page navigation example" className="pt-4 pb-3">
            <ul className="pagination justify-content-center justify-content-lg-end">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => onDownPage(page)}
                  disabled={page <= 1}
                >
                  <span>«</span>
                </button>
              </li>

              <li className="page-item">
                <button
                  className="page-link"
                  onClick={() => onUpPage(page)}
                  disabled={page >= totalPage}
                >
                  <span>»</span>
                </button>
              </li>
            </ul>
            <div className="pagination justify-content-center justify-content-lg-end">
              <p className="text-small text-muted mb-0">
                {page}/{totalPage} Pages
              </p>
            </div>
          </nav>
        </section>
      </FadeTransform>
    </div>
  );
};

export default Menu;
