import { Link } from 'react-router-dom';
import { useState } from 'react';

const List = () => {
  const [active, setActive] = useState('Home');

  const handlerActive = (value) => {
    setActive(value);
  };
  return (
    <header className="container">
      <hr></hr>
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
        <hr></hr>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" onClick={() => handlerActive('Home')}>
              <Link
                className="nav-link "
                to={`/`}
                style={
                  active === 'Home'
                    ? { color: ' #9ac741', transform: 'scale(1.2,1.2)' }
                    : { color: 'black' }
                }
              >
                <p className="bold1">Họ</p>
              </Link>
            </li>
            <li className="nav-item" onClick={() => handlerActive('Plants')}>
              <Link
                className="nav-link bold"
                to={`/plants`}
                style={
                  active === 'Plants'
                    ? { color: ' #9ac741', transform: 'scale(1.2,1.2)' }
                    : { color: 'black' }
                }
              >
                <p className="bold1">Thực vật</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default List;
