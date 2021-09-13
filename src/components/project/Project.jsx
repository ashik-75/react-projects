import './project.scss';
import { Link } from 'react-router-dom';

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="title">
        <Link to={data.url} target="_blank">
          {data.title}
        </Link>
      </div>
    </div>
  );
};

export default Project;
