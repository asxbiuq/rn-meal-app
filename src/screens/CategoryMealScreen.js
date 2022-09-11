import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { filteredMeals } from "../slice";

export default ({ navigation, route }) => {
  const { categoryId } = route.params

  const availableMeals = useSelector(filteredMeals)

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  )

  return (
    <MealList listData={displayedMeals} navigation={navigation}/>
  )
}
