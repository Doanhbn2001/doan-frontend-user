import React from 'react';
import './header.css';
import Image from '../../share/image/images';

const Header = () => {
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
                  <i className="fa-sharp fa-solid fa-seedling fa-2xl"></i>
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
                  <i className="fa-solid fa-map-location-dot fa-2xl"></i>
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
                  <i className="fa-solid fa-lemon fa-2xl"></i>
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
                  <i className="fa-solid fa-address-card fa-2xl"></i>
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
          <img className="images-box" src={Image.img1} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img2} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img3} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img4} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img5} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img6} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img7} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img8} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img9} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img10} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img11} alt="ảnh minh họa" />
          <img className="images-box" src={Image.img12} alt="ảnh minh họa" />
        </div>
      </header>
    </div>
  );
};

export default Header;
