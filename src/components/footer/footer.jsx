import React from 'react';
import './footer.css';

function Footer(props) {
  return (
    <footer className="bg-dark text-white footer">
      <div className="container py-4">
        <div className="row py-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3 bold">Dịch vụ</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="footer-link" href="#">
                  Nghiên cứu về các loài thực vật
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Nghiên cứu về phấn hoa
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Vị trí phân bổ các loài thực vật
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Liên hệ hợp tác
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3 bold">Thông tin</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="footer-link" href="#">
                  Hơn 20 họ các loài thực vật
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Hơn 50 loài thực vật
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Thông tin chi tiết về hoa của chúng
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Vị trí các loài thực vật
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase mb-3 bold">Liên hệ</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="footer-link" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
