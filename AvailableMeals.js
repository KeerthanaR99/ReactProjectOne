import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Apple',
      description: 'Juicy And Crunchy!',
      price: 250,
    },
    {
      id: 'm2',
      name: 'Mango',
      description: 'Mouth Watering Sweetness!',
      price: 300,
    },
    {
      id: 'm3',
      name: 'Carrot',
      description: 'Loaded Vitamin A!',
      price: 120,
    },
    {
      id: 'm4',
      name: 'Spinach',
      description: 'Healthy...and green...',
      price: 400,
    },
  ];


const AvailableMeals=()=>{
const mealslist= DUMMY_MEALS.map(meal=> (
    <MealItem 
    key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price}
    />
    ));

    return <section className={classes.meals}>
        <Card>
            <ul>{mealslist}</ul>
        </Card>
    </section>
    


};
export default AvailableMeals;