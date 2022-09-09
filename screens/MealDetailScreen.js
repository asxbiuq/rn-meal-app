import { View, Text, StyleSheet, Button } from "react-native"
import { MEALS } from "../data/dummy-data"
import { useLayoutEffect } from "react"
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
// import HeaderButton from "../components/HeaderButton";
import { Ionicons } from '@expo/vector-icons';


export default ({ navigation, route }) => {
  const { mealId } = route.params
  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const LogoTitle = () => {
    return (
      <Text>{selectedMeal.title}</Text>
    )
  }

  const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="star" iconName="star" onPress={() => alert('star')} color={'white'}/>
        </HeaderButtons>
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

