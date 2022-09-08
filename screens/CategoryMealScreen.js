import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";


export default ({ navigation, route }) => {
  const { categoryId } = route.params
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )



  return (
    <MealList listData={displayedMeals} navigation={navigation}/>
  )
}

