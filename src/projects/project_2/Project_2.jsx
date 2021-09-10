import axios from 'axios';
import { useEffect, useState } from 'react';
import './project_2.scss';

const Project_2 = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  window.onscroll = function () {
    const offset = document.documentElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;

    if (windowHeight + scrollTop === offset) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      const { data } = await axios({
        method: 'GET',
        url: `https://randomuser.me/api/?page=${page}&results=5`,
      });
      //   console.log(data.results);
      setLoading(false);

      setUser((prev) => [...prev, ...data.results]);
    }

    loadPost();
  }, [page]);

  console.log(user);
  return (
    <div className="project_2">
      <div className="posts-container">
        <div className="title">Blog Post design with Infinite Scrolling</div>
        <div className="posts">
          {user.map((x, index) => (
            <div className="post" key={index}>
              <div className="post-title">This is post title </div>
              <div className="post-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                dicta quaerat soluta cupiditate blanditiis aut dolores in
                ratione rem unde!
              </div>
              <div className="post-writer">
                <img src={x.picture.medium} alt="" />
                <div className="post-name">{`${x.name.first} ${x.name.last}`}</div>
              </div>
            </div>
          ))}
        </div>
        {loading && (
          <div className="loading">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project_2;
