import './project.scss';
import { Link } from 'react-router-dom';

const Project = ({ data }) => {
  return (
    <div className="project">
      <Link target="_blank" className="link" to={data.url}>
        <div className="card">
          <div className="img">
            <img src={data.imgUrl} alt="" />
          </div>
          <div className="title">{data.title}</div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
