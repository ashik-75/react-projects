import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/loader/Loader';
import './project_3.scss';

const Project_3 = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const [popImage, setPopImage] = useState(null);

  const [startSearch, setStartSearch] = useState(false);

  const [category, setCategory] = useState('');
  const access_id = 'zcUGsCgU-xujL0JhrLZCVAsRfBi-MYbxZRHsvJL4egY';

  console.log('Category is ', category);

  useEffect(() => {
    let token;
    async function loadImage() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `https://api.unsplash.com/search/photos/?query=${
            category ? category.split(' ').join('-') : 'feature'
          }&page=${page}&per_page=${per_page}&client_id=${access_id}`,
          cancelToken: new axios.CancelToken((cancel) => (token = cancel)),
        });

        setPhotos([...photos, ...data.results]);
        // setCategory('');
      } catch (error) {
        if (axios.isCancel(error)) return;
      }
    }

    loadImage();
    return () => token();
  }, [startSearch, page, per_page]);

  const handlePopImageClose = (e) => {
    console.log(e.target.classList.contains('popup'));
    if (e.target.classList.contains('popup')) {
      setPopImage(null);
    }
  };

  window.onscroll = function () {
    const totalHeight = document.documentElement.offsetHeight;
    const innerHeight = window.innerHeight;
    const scrollFromTop = document.documentElement.scrollTop;
    if (totalHeight === innerHeight + scrollFromTop) {
      setPage((prev) => prev + 1);
    }
  };

  const handleSearch = (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key === 'Enter') {
      setPhotos([]);
      setStartSearch((prev) => !prev);
    }
  };

  return (
    <div className="project_3">
      <h3>PhotoGram</h3>

      <div className="search">
        <input
          type="text"
          placeholder="Search whatever you want..."
          // value={category}
          onChange={(e) => setCategory(e.target.value)}
          onKeyPress={handleSearch}
        />
      </div>

      {popImage && (
        <div className="modal">
          <span onClick={() => setPopImage(null)}>
            <i className="fas fa-times"></i>
          </span>

          <div className="popup" onClick={handlePopImageClose}>
            <img src={popImage} alt="" />
          </div>
        </div>
      )}
      {/* end pop up */}
      <div className="images-container">
        {photos.map((dt) => (
          <div
            // key={dt.id}
            className="image"
            onClick={() => setPopImage(dt.urls.regular)}
          >
            <img src={dt.urls.regular} alt="" />
          </div>
        ))}
      </div>
      <Loader />
    </div>
  );
};

export default Project_3;
