import { View, Text, StyleSheet, Button } from "react-native"
import { MEALS } from "../data/dummy-data"
import { useLayoutEffect } from "react"



export default ({ navigation, route }) => {
  const { mealId } = route.params
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const LogoTitle = () => {
    return (
      <Text>{selectedMeal.title}</Text>
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (
        <Text>FAV!</Text>
      ),
    })
  }, [navigation])

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button 
        title='Go Back to Categories'
        onPress={() => {
          navigation.popToTop()
        }}
      />
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

