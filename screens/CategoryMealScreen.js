import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";


export default ({ navigation, route }) => {
  const { categoryId } = route.params

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  return (
    <MealList listData={displayedMeals} navigation={navigation}/>
  )
}

