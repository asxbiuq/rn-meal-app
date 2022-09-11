import { StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import IoniconsHeaderButton from '../components/IoniconsHeaderButton'
import useHeaderLeft from '../hooks/useHeaderLeft'
import { useSelector } from 'react-redux'
import { favoriteMeals } from '../slice'

export default ({ navigation }) => {
  const favMeals = useSelector(favoriteMeals)


  useHeaderLeft(navigation, () => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title='menu'
        iconName='menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ))

  return <MealList listData={favMeals} navigation={navigation} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
