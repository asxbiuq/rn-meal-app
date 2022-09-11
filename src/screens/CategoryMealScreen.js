import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { filteredMeals } from "../slice";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";


export default ({ navigation }) => {
  const displayedMeals = useSelector(filteredMeals)

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meal found, maybe check your filters?</DefaultText>
      </View>
    )
  }

  return (
    <MealList listData={displayedMeals} navigation={navigation}/>
  )
}

const styles = StyleSheet({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
