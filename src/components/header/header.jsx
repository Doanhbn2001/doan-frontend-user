import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Image from '../../share/image/images';

const Header = () => {
  const [active, setActive] = useState('Home');

  const handlerActive = (value) => {
    setActive(value);
  };
  return (
    <div className="container">
      <section
        className="hero bg-cover d-flex"
        style={{ backgroundImage: `url(${Image.banner})` }}
      >
        <div className="container py-5">
          <div className="row px-4 px-lg-5">
            <div className="col-lg-8">
              <h1 className="text-muted fs-2 text-uppercase mb-2 bold">
                Khảo sát phân bổ loài thực vật
              </h1>
              <h1 className="h2 fs-3 bold text-uppercase mb-3">
                Hơn 50 loài thực vật và phấn hoa của chúng
              </h1>
            </div>
          </div>
        </div>
      </section>

      <header className="pt-5">
        <hr></hr>
        <h2 className="text-uppercase fs-4 mb-4 bold pb-3">Giới thiệu</h2>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6 gt-box">
                <div className="box-left">
                  <i class="fa-sharp fa-solid fa-seedling fa-2xl"></i>
                </div>
                <div className="box-right">
                  <p className="bold">Thông tin thực vật</p>
                  <p>
                    Hơn 50 loài thực vật,thông tin về tên,họ và chi của loài
                    thực vật,mô tả chi tiết về hoa,đặc điểm của chúng
                  </p>
                </div>
              </div>
              <div className="col-6 gt-box">
                <div className="box-left">
                  <i class="fa-solid fa-map-location-dot fa-2xl"></i>
                </div>
                <div className="box-right">
                  <p className="bold">Vị trí phân bổ thực vật</p>
                  <p>
                    Vị trí chính xác của từng loài thực vật trên bản đồ,có thể
                    truy cập thông tin thực vật từ bản đồ
                  </p>
                </div>
              </div>
              <div className="col-6 gt-box">
                <div className="box-left">
                  <i class="fa-solid fa-lemon fa-2xl"></i>
                </div>
                <div className="box-right">
                  <p className="bold">Phấn hoa </p>
                  <p>
                    Đặc điểm phấn hoa của từng loài thực vật,hình ảnh phấn hoa
                    thu được qua kính hiển vi,hình ảnh phấn hoa thu được thực tế
                  </p>
                </div>
              </div>
              <div className="col-6 gt-box">
                <div className="box-left">
                  <i class="fa-solid fa-address-card fa-2xl"></i>
                </div>
                <div className="box-right">
                  <p className="bold">Liên hệ hợp tác</p>
                  <p>
                    Liên hệ hợp tác với chúng tôi để có thể trao đổi dữ liệu về
                    các loài thực vật, giao lưu và trao đổi để có thể áp dụng
                    atlas trong thực tế
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 gt-box-right">
            <div className="gt-box1">
              <p className="bold">
                Phục vụ hoàn hảo cho việc tra thông tin về thực vật trong khu
                vực
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className=" pt-5 pb-5">
        <hr></hr>
        <h2 className="text-uppercase fs-4 mb-4 bold pb-3 ">
          Hoạt động nghiên cứu
        </h2>
        <div className="images">
          <img className="images-box" src={Image.img1} />
          <img className="images-box" src={Image.img2} />
          <img className="images-box" src={Image.img3} />
          <img className="images-box" src={Image.img4} />
          <img className="images-box" src={Image.img5} />
          <img className="images-box" src={Image.img6} />
          <img className="images-box" src={Image.img7} />
          <img className="images-box" src={Image.img8} />
          <img className="images-box" src={Image.img9} />
          <img className="images-box" src={Image.img10} />
          <img className="images-box" src={Image.img11} />
          <img className="images-box" src={Image.img12} />
        </div>
      </header>
      <hr></hr>

      <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
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
    </div>
  );
};

export default Header;
