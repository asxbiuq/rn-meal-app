import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS }  from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import IoniconsHeaderButton from "../components/IoniconsHeaderButton";
import useHeaderLeft from "../hooks/useHeaderLeft";

export default ({navigation}) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  useHeaderLeft(navigation,() => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item title="menu" iconName="menu" onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  ))

  return(
    <MealList listData={favMeals} navigation={navigation}/>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})