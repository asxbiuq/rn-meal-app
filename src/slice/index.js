import { createSlice } from '@reduxjs/toolkit'
import { MEALS } from '../data/dummy-data'

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
  },
  reducers: {
    toggleFavorite : (state, action) => {
      const selectedMeal = action.payload
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === selectedMeal.id
      )

      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals]
        updateFavMeals.splice(existingIndex, 1)
        console.log('取消收藏')
        return {...state, favoriteMeals: updateFavMeals }
      } else {
        const meal = selectedMeal
        console.log('添加收藏')
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
      }
    },

    setFilters: (state, action) => {
      const appliedFilters = action.payload
      console.log('appliedFilters', appliedFilters)

      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false
        }
        if (appliedFilters.lactoseFree && !meal.isGlutenFree) {
          return false
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false
        }
        return true
      })

      return { ...state, filteredMeals: updatedFilteredMeals}
    }
  },
})

export const { toggleFavorite, setFilters } = mealSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const meals = (state) => state.meal.meals
export const filteredMeals = (state) => state.meal.filteredMeals
export const favoriteMeals = (state) => state.meal.favoriteMeals

export default mealSlice.reducer