import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './plantDetail.css';
import { FadeTransform } from 'react-animation-components';
import API from '../../API/api';
import { Form, Input, Button, Label } from 'reactstrap';

const DetailPlant = ({ idUser, resetNote, setResetNote }) => {
  const [note, setNote] = useState('Ghi chú về thực vật');
  const { idPlant } = useParams();
  const [error, setError] = useState(false);
  const [plant, setPlant] = useState({
    name: '',
    img1: '',
    description: '',
    type: '',
    family: '',
  });

  const hadnleSubmit = () => {
    const fetchData = async () => {
      const response = await API.addNote(idUser, idPlant, note);
      console.log(response);
      if (response.data.error) {
        alert(response.data.mess);
      } else {
        alert('Thêm ghi chú thành công!!');
        setResetNote(!resetNote);
      }
    };
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getPlant(idPlant);
      if (response.data.error) {
        setError(true);
      } else {
        setPlant(response.data.data);
      }
    };
    fetchData();
  }, [idPlant]);

  if (error) return <div>ERROR SERVER</div>;
  return (
    <div className="container">
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)',
        }}
      >
        <section className="pt-5">
          <header className="text-plant">
            <Link to={`/types/${plant.type._id}`} className="text-link">
              <h2 className="fs-4 bold text-uppercase mb-1">
                {plant.type && plant.type.name}
              </h2>
            </Link>
            <h2 className="fs-4 bold text-uppercase mb-1">
              {' '}
              »»» {plant.name}{' '}
            </h2>
          </header>
          <div className="row pt-3 pb-5">
            <div className="col-4 p-box">
              <img src={plant.img1} alt="ảnh thực vật"></img>
            </div>
            <div className="col-2"></div>
            <div className="col-6 ">
              <p className="  text-plant">Tên chi: {plant.family}</p>
              <p className="  text-plant">{plant.description}</p>
            </div>
          </div>
          <header className="text-center">
            <h4 className=" fs-4 bold text-uppercase mb-1">Mô tả phấn hoa</h4>
          </header>
          <div className="row pt-3 pb-5">
            <div className="col-4 p-image">
              <img src={plant.img2} alt="ảnh phấn hoa"></img>
            </div>
            <div className="col-2"></div>

            <div className="col-6">
              {plant.shape_p !== '' && (
                <p className="text-plant">Hình dạng: {plant.shape_p}</p>
              )}
              {plant.size_p !== '' && (
                <p className="text-plant">Kích thước: {plant.size_p}</p>
              )}
              {plant.surface_p !== '' && (
                <p className="text-plant">Bề mặt: {plant.surface_p}</p>
              )}
              {plant.aperture_p !== '' && (
                <p className="text-plant">Hình dạng vỏ: {plant.aperture_p}</p>
              )}
              {plant.exine_p !== '' && (
                <p className="text-plant">Hình dạng gai: {plant.exine_p}</p>
              )}
              {plant.structure_p !== '' && (
                <p className="text-plant">Đặc điểm khác: {plant.structure_p}</p>
              )}
            </div>
          </div>
          {idUser ? (
            <div className="row pt-2 pb-5">
              <div className="form-note">
                <textarea
                  className="text-note"
                  name="note"
                  id="note"
                  rows={4}
                  cols="120"
                  value={note}
                  onChange={(evt) => {
                    setNote(evt.target.value);
                  }}
                ></textarea>
                <Button
                  color="primary"
                  className="button-note"
                  onClick={hadnleSubmit}
                >
                  Tạo ghi chú
                </Button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </section>
      </FadeTransform>
    </div>
  );
};

export default DetailPlant;
