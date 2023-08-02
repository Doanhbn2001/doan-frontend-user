import { useState, useEffect } from 'react';

const Form = () => {
  const [image, setImage] = useState('');
  const [id, setId] = useState('');
  const convertToBase64 = (e) => {
    var render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = () => {
      setImage(render.result);
    };
    render.onerror = (error) => {
      console.log('error: ', error);
    };
  };

  const changeIndex = (e) => {
    setId(e.target.value);
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file');
    fetch('http://localhost:5000/plants/upload-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ base64: image, id: id }),
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/plants/get-all')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPlants(res.data);
      });
  }, []);

  return (
    <div>
      <input accept="image/" type="file" onChange={convertToBase64} />
      <input type="text" onChange={changeIndex} />
      <button onClick={uploadImage}>Upload</button>
      {plants.map((p, index) => {
        return (
          <div key={p._id}>
            <p>
              {index + 1}: {p._id} : {p.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
