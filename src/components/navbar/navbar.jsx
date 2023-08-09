import { Link } from 'react-router-dom';
import API from '../../API/api';
import './navbar.css';

const Navbar = ({ idUser, setIdUser }) => {
  const Logout = () => {
    const fetchData = async () => {
      const response = await API.getLogout();

      if (!response.data.error) {
        localStorage.removeItem('idUser');
        setIdUser(false);
      }
    };

    fetchData();
  };

  const LogoutLink = () => {
    return (
      <li className="nav-item1" onClick={Logout}>
        <Link className="nav-link" to="/signin">
          Logout
        </Link>
      </li>
    );
  };

  const LoginLink = () => {
    return (
      <li className="nav-item1">
        <Link className="nav-link" to="/signin">
          Login
        </Link>
      </li>
    );
  };

  return (
    <div className="container px-0 px-lg-3">
      <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
        <Link className="navbar-brand" to={`/`}>
          <span className="font-weight-bold text-uppercase text-dark">
            Atlas
          </span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {idUser ? <LogoutLink /> : <LoginLink />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
