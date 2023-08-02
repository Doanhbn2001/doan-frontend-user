import { useState } from 'react';

const Map = () => {
  return (
    <div className="container">
      <hr></hr>
      <header className="text-center">
        <h2 className="text-uppercase fs-4 mb-4 bold ">Phân bố thực vật</h2>
      </header>
      <iframe
        src="https://geocms.vietmap.vn/map-embed/?ids=57&accessToken=aASoIOddZGGOTE3jfpZPsYaY9P4nVL"
        width={'100%'}
        height={'800px'}
      ></iframe>
    </div>
  );
};

export default Map;
