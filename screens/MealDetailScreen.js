import { View, Text, StyleSheet, Button, Image } from "react-native"
import { MEALS } from "../data/dummy-data"
import { useLayoutEffect } from "react"
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import DefaultText from "../components/DefaultText";
import IoniconsHeaderButton from "../components/IoniconsHeaderButton";
import useHeaderLeft from "../hooks/useHeaderLeft";
import useHeaderTitle from "../hooks/useHeaderTitle";

const ListItem = ({children}) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  )
}

export default ({ navigation, route }) => {
  const { mealId } = route.params
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const LogoTitle = () => {
    return (
      <Text>{selectedMeal.title}</Text>
    )
  }

  useHeaderRight(navigation,() => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item title="star" iconName="star" onPress={() => alert('star')} color={'white'}/>
    </HeaderButtons>
  ))

  useHeaderTitle(navigation,(props) => <LogoTitle {...props} />)

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
})

