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
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    toggleFavorite : (state, action) => {
      const selectedMeal = action.payload
      // console.log('selectedMeal', selectedMeal)
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === selectedMeal.id
      )
      // console.log('existingIndex: ',existingIndex)

      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals]
        updateFavMeals.splice(existingIndex, 1)
        console.log('取消收藏')
        return {...state, favoriteMeals: updateFavMeals }
      } else {
        // console.log('state.meals',state.meals)
        const meal = selectedMeal
        // console.log('meal',meal)
        // console.log({ ...state, favoriteMeals: state.favoriteMeals.concat(meal) })
        console.log('添加收藏')
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
      }
    }
  },
})

export const { increment, decrement, incrementByAmount, toggleFavorite } = mealSlice.actions

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