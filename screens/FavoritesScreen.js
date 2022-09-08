import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS }  from '../data/dummy-data'
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderButtons,
  HeaderButton,
  Item
} from 'react-navigation-header-buttons';
import { useLayoutEffect } from "react";

export default ({navigation}) => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  const IoniconsHeaderButton = (props) => (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  );
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="menu" iconName="menu" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
      ),
    })
  }, [navigation])

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