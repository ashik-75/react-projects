import './project.scss';

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="title">{data.title}</div>
    </div>
  );
};

export default Project;
