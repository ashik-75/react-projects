import './project_1.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Project_1 = () => {
  const [generate, setGenerate] = useState(false);
  const [meals, setMeals] = useState({});
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    async function loadPost() {
      const instructions = [];
      const { data } = await axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php',
      });
      const result = data.meals[0];
      for (let i = 1; i < 20; i++) {
        console.log(i, result[`strIngredient${i}`]);
        if (result[`strIngredient${i}`]) {
          instructions.push(
            `${result[`strIngredient${i}`]} - ${result[`strMeasure${i}`]}`
          );
        }
      }
      setMeals(result);
      setInstructions(instructions);
    }

    loadPost();
  }, [generate]);

  console.log(meals);
  return (
    <div className="meals">
      <div className="top">
        <div className="title">Are you Hungry</div>
        <div className="sub-title">get random food</div>
        <button onClick={() => setGenerate((dt) => !dt)}>
          Get New Meal 🍔
        </button>
      </div>

      {Object.keys(meals).length > 0 ? (
        <div className="food-container">
          <div className="left-five">
            <div className="image">
              <img src={meals.strMealThumb} alt="" />
            </div>
            <div className="info">
              <div className="category">
                {' '}
                <strong>Category: </strong> {meals.strCategory}{' '}
              </div>
              <div className="category">
                {' '}
                <strong>Area: </strong> {meals.strArea}{' '}
              </div>
            </div>
            <div className="ingredients">
              <div className="ingre-title">Ingredients</div>
              <ul>
                {instructions.map((dt) => (
                  <li>{dt}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right-seven">
            <div className="food-title">{meals.strMeal}</div>
            <div className="food-desc">{meals.strInstructions}</div>
            <div className="food-video">
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${meals.strYoutube.slice(
                    -11
                  )}`}
                  title={meals.strMeal}
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Project_1;
