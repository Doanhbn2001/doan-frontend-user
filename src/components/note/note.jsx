import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import API from '../../API/api';
import './note.css';

const Note = ({ idUser, resetNote, setResetNote }) => {
  const [note, setNote] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getData(idUser);
      if (response.data.error) {
        setError(true);
      } else {
        setNote(response.data.data.plant_notes);
      }
    };
    fetchData();
  }, [resetNote]);

  const handleDelete = (n) => {
    const fetchData = async () => {
      const response = await API.deleteNote(idUser, n.plant._id);
      if (response.data.error) {
        setError(true);
      } else {
        alert('Xóa ghi chú thành công');
        setResetNote(!resetNote);
      }
    };
    fetchData();
  };
  if (error) return <div>ERROR SERVER</div>;
  return (
    <header className="container">
      <hr></hr>
      <h2 className="text-uppercase fs-4 mb-4 bold pb-3 ">Ghi chú</h2>
      {idUser ? <p></p> : <p>Đăng nhập để sử dụng ghi chú</p>}

      <div className="row">
        {note &&
          note.map((n) => {
            return (
              <div className="col-4" key={n.plant._id}>
                <Card className="box-content">
                  <CardImg src={`${n.plant.img1}`}></CardImg>
                  <CardBody>
                    <CardTitle className="bold">{n.plant.name}</CardTitle>
                    <CardText>{n.note}</CardText>
                    <Link to={`/plants/${n.plant._id}`} key={n._id}>
                      <Button color="warning" className="note-button">
                        Sửa
                      </Button>
                    </Link>
                    <Button
                      color="danger"
                      className="note-button"
                      onClick={() => {
                        handleDelete(n);
                      }}
                    >
                      Xóa
                    </Button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    </header>
  );
};

export default Note;
