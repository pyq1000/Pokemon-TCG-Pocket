import React, { useState, useRef, useCallback, useEffect } from 'react';
import { images, Image } from './card';

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const ImageGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 搜尋和篩選狀態
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    haswater: false,
    hasgrass: false,
    hasfire: false,
    haspsychic: false,
    haseletric: false,
    hasfighting: false,
    hasdarkness: false,
    hasmetal: false,
    hasdragon: false,
    hascolorless: false,
    hasitem: false,
    hastrainer: false,
    hasPromo_A: false
  });

  // 使用防抖動的搜尋詞
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms 延遲

  // 使用防抖動的篩選選項
  const debouncedFilterOptions = useDebounce(filterOptions, 300);

  // 優化的篩選邏輯
  const getFilteredImages = useCallback(() => {
    return images.filter(image => {
      const typeLower = image.type.toLowerCase();
      const descriptionLower = image.description.toLowerCase();
      const altLower = image.alt.toLowerCase();
      const searchLower = debouncedSearchTerm.toLowerCase();

      const matchesSearch = typeLower.includes(searchLower) ||
        altLower.includes(searchLower);

      const matchesFilters = (
        // 如果沒有選擇任何篩選條件，顯示所有結果
        Object.values(debouncedFilterOptions).every(value => !value) ||
        // 否則檢查是否符合任一已選條件
        (
          (debouncedFilterOptions.hasgrass && typeLower.includes('草屬性')) ||
          (debouncedFilterOptions.hasfire && typeLower.includes('火屬性')) ||
          (debouncedFilterOptions.haswater && typeLower.includes('水屬性')) ||
          (debouncedFilterOptions.haseletric && typeLower.includes('雷屬性')) ||
          (debouncedFilterOptions.haspsychic && typeLower.includes('超屬性')) ||
          (debouncedFilterOptions.hasfighting && typeLower.includes('鬥屬性')) ||
          (debouncedFilterOptions.hasdarkness && typeLower.includes('惡屬性')) ||
          (debouncedFilterOptions.hasmetal && typeLower.includes('鋼屬性')) ||
          (debouncedFilterOptions.hasdragon && typeLower.includes('龍屬性')) ||
          (debouncedFilterOptions.hascolorless && typeLower.includes('無屬性')) ||
          (debouncedFilterOptions.hasitem && typeLower.includes('物品')) ||
          (debouncedFilterOptions.hastrainer && typeLower.includes('訓練家')) ||
          (debouncedFilterOptions.hasPromo_A && descriptionLower.includes('promo-a'))

        )
      );

      return matchesSearch && matchesFilters;
    });
  }, [debouncedSearchTerm, debouncedFilterOptions]);

  // 使用 useMemo 緩存篩選結果
  const filteredImages = React.useMemo(() => getFilteredImages(),
    [getFilteredImages]);

  // 優化的篩選處理函數
  const handleFilterChange = useCallback((filterName: keyof typeof filterOptions) => {
    setFilterOptions(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  }, []);

  // 優化的搜尋處理函數
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // 優化的重置函數
  const resetFilters = useCallback(() => {
    setFilterOptions({
      haswater: false,
      hasgrass: false,
      hasfire: false,
      haspsychic: false,
      haseletric: false,
      hasfighting: false,
      hasdarkness: false,
      hasmetal: false,
      hasdragon: false,
      hascolorless: false,
      hasitem: false,
      hastrainer: false,
      hasPromo_A: false
    });
    setSearchTerm("");
  }, []);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    document.body.style.overflowY="hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflowY="auto";
  };

  return (
    <div className="home">
      <div className="page1">
        <h1>全圖鑑</h1>

        <div className="filter-controls">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="搜尋寶可夢..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {/* 添加loading指示器 */}
            {searchTerm !== debouncedSearchTerm && (
              <div className="search-loading">搜尋中...</div>
            )}
          </div>

          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasgrass}
                onChange={() => handleFilterChange('hasgrass')}
              />
              草屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasfire}
                onChange={() => handleFilterChange('hasfire')}
              />
              火屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.haswater}
                onChange={() => handleFilterChange('haswater')}
              />
              水屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.haseletric}
                onChange={() => handleFilterChange('haseletric')}
              />
              雷屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.haspsychic}
                onChange={() => handleFilterChange('haspsychic')}
              />
              超能屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasfighting}
                onChange={() => handleFilterChange('hasfighting')}
              />
              鬥屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasdarkness}
                onChange={() => handleFilterChange('hasdarkness')}
              />
              惡屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasmetal}
                onChange={() => handleFilterChange('hasmetal')}
              />
              鋼屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasdragon}
                onChange={() => handleFilterChange('hasdragon')}
              />
              龍屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hascolorless}
                onChange={() => handleFilterChange('hascolorless')}
              />
              無屬性
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasitem}
                onChange={() => handleFilterChange('hasitem')}
              />
              物品
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hastrainer}
                onChange={() => handleFilterChange('hastrainer')}
              />
              訓練家
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterOptions.hasPromo_A}
                onChange={() => handleFilterChange('hasPromo_A')}
              />
              promo-A
            </label><br />
            <button onClick={resetFilters} className="reset-button">
              重置篩選
            </button>
          </div>
        </div>

        {/* 添加結果計數 */}
        <div className="results-count">
          找到 {filteredImages.length} 個結果
        </div>

        <div className="image-grid">
          {filteredImages.map((image, index) => (
            <div className="image-container" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="image-trigger"
                onClick={() => openModal(image)}
                loading="lazy" // 添加懶加載
              />
              <p className="image-caption">{image.alt}</p>
            </div>
          ))}
        </div>

        {/* Modal 部分保持不變 */}
        {selectedImage && (<div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            style={{ top: `${window.scrollY+90}px` }}
          >
            <div className="modal-layout">
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <h2>{selectedImage.type}</h2>
              <div className="description">
                <div>
                  <h2>{selectedImage.alt}</h2>
                  <br />
                  <p>{selectedImage.description}</p>
                </div>
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


