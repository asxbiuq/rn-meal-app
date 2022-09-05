import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";


export default ({ navigation, route }) => {
  const { categoryId } = route.params
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

  return(
    <View style={styles.screen}>
      <Text>The CategoryMeal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Meals"onPress={()=>{
        navigation.navigate('MealDetail')
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})