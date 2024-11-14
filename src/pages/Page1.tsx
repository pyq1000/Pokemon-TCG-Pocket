import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="home">
      <div className="page1">
        <h1>全圖鑑</h1>
        <div className="image-grid">
          <img src="image1.jpg" alt="Image 1" className="image-trigger" />
          <img src="image2.jpg" alt="Image 2" className="image-trigger" />
          <img src="image3.jpg" alt="Image 3" className="image-trigger" />
          <img src="image4.jpg" alt="Image 4" className="image-trigger" />
          <img src="image5.jpg" alt="Image 5" className="image-trigger" />
          <img src="image6.jpg" alt="Image 6" className="image-trigger" />
        </div>
      </div>
      <div id="image-modal" className="image-modal">
        <div className="image-modal-content">
          <span className="close-button">&times;</span>
          <img id="modal-image" src="" alt="Modal" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
