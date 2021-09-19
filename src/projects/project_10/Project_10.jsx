import './project_10.scss';

const tableData = [
  {
    id: 1,
    name: 'alex hales',
    profession: 'Cricketer',
    email: 'alex@gmail.com',
    details: '',
  },
  {
    id: 2,
    name: 'sakib al hasan',
    profession: 'Cricketer',
    email: 'sakib@gmail.com',
    details: '',
  },
  {
    id: 3,
    name: 'alex hales',
    profession: 'Cricketer',
    email: 'alex@gmail.com',
    details: '',
  },
  {
    id: 4,
    name: 'tamim iqbal',
    profession: 'Cricketer',
    email: 'tamim@gmail.com',
    details: '',
  },
  {
    id: 5,
    name: 'musfiqur Rahim',
    profession: 'Cricketer',
    email: 'mushi@gmail.com',
    details: '',
  },
  {
    id: 6,
    name: 'Rafiqul Islam',
    profession: 'Teacher',
    email: 'rafique@gmail.com',
    details: '',
  },
];

const Project_10 = () => {
  return (
    <div className="project_10">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Profession</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((dt) => (
            <tr>
              <td data-label="Id">{dt.id}</td>
              <td data-label="Name">{dt.name}</td>
              <td data-label="Profession">{dt.profession}</td>
              <td data-label="Email">{dt.email}</td>
              <td data-label="Details">
                <button>details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Project_10;
