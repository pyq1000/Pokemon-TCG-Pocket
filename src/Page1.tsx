import React, { useState } from "react";
import Image1 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00053.png';
import Image2 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00054.png';
import Image3 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00055.png';
import Image4 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00056.png';
import Image5 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00057.png';
import Image6 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00058.png';
import Image7 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00059.png';
import Image8 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00060.png';
import Image9 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00061.png';
import Image10 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00062.png';
import Image11 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00063.png';
import Image12 from './assets/pokemon tcg/水(053~093)/GeneticApex_10_00064.png';

interface Image {
  src: string;
  alt: string;
  description: string;
}

const images: Image[] = [
  { src: Image1, alt: "傑尼龜", description: "這是可愛的傑尼龜，擁有堅固的龜殼。" },
  { src: Image2, alt: "卡咪龜", description: "進化後的卡咪龜，力量更強。" },
  { src: Image3, alt: "水箭龜", description: "水箭龜，能夠使用強力的水炮攻擊。" },
  { src: Image4, alt: "水箭龜EX", description: "EX版本的水箭龜，攻擊力無人能敵。" },
  { src: Image5, alt: "可達鴨", description: "可愛的可達鴨，經常忘記事情。" },
  { src: Image6, alt: "哥達鴨", description: "哥達鴨，專注於水系技能的強者。" },
  { src: Image7, alt: "蚊香蝌蚪", description: "這是可愛的傑尼龜，擁有堅固的龜殼。" },
  { src: Image8, alt: "蚊香君", description: "進化後的卡咪龜，力量更強。" },
  { src: Image9, alt: "蚊香泳士", description: "水箭龜，能夠使用強力的水炮攻擊。" },
  { src: Image10, alt: "瑪瑙水母", description: "EX版本的水箭龜，攻擊力無人能敵。" },
  { src: Image11, alt: "毒刺水母", description: "可愛的可達鴨，經常忘記事情。" },
  { src: Image12, alt: "小海獅", description: "哥達鴨，專注於水系技能的強者。" },
];

const ImageGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="home">
      <div className="page1">
        <h1>全圖鑑</h1>
        {/* 圖片網格 */}
        <div className="image-grid">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="image-trigger"
                onClick={() => openModal(image)}
              />
              <p className="image-caption">{image.alt}</p>
            </div>
          ))}
        </div>

        {/* 懸浮視窗 */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-layout">
                <img src={selectedImage.src} alt={selectedImage.alt} />
                <div className="description">
                  <h2>{selectedImage.alt}</h2>
                  <p>{selectedImage.description}</p>
                </div>
              </div>
              <button className="close-button" onClick={closeModal}>
                關閉
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;
