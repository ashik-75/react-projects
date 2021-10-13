import { useState } from 'react';
import './project_13.scss';

const products = [
  {
    id: 1,
    name: 'Grill Chicken',
    price: 80,
  },
  {
    id: 2,
    name: 'Chilly Chicken',
    price: 100,
  },
  {
    id: 3,
    name: 'Chickend Fry',
    price: 180,
  },
  {
    id: 4,
    name: 'Chicken Ball',
    price: 200,
  },
  {
    id: 5,
    name: 'Chicken Roast',
    price: 95,
  },
];

const Project_13 = () => {
  const length = products.length;
  const [count, setCount] = useState([...Array(length).fill(false)]);
  const [total, setTotal] = useState(0);

  console.log(count);
  const getProductPrice = (price) => {
    return `৳${price.toFixed(2)}`;
  };
  const handleCheck = (id) => {
    const newCount = count.map((dt, index) => (index === id ? !dt : dt));
    setCount(newCount);

    // newCount.reduce(())
    let sum = 0;
    for (let i = 0; i < length; i++) {
      if (newCount[i]) {
        sum += products[i].price;
      }
    }

    setTotal(sum);
  };
  return (
    <div className="project_13">
      <div className="box">
        <div className="title">Chicken items</div>
        <div className="items">
          <ul>
            {products.map((prod, index) => (
              <li key={index}>
                <div className="container">
                  <div className="left">
                    <input
                      checked={count[index]}
                      type="checkbox"
                      id={`id-${index}`}
                      onChange={() => handleCheck(index)}
                    />
                    <label htmlFor={`id-${index}`}>{prod.name}</label>
                  </div>
                  <div className="right">{getProductPrice(prod.price)}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <div className="total-container">
              <div className="line"></div>
              <div className="cont">
                <div className="titl">Total Amount</div>
                <div className="price">{getProductPrice(total)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_13;
