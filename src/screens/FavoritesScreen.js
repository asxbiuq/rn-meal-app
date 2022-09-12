import { StyleSheet, View, Text } from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import IoniconsHeaderButton from '../components/IoniconsHeaderButton'
import useHeaderLeft from '../hooks/useHeaderLeft'
import { useSelector } from 'react-redux'
import { favoriteMeals } from '../slice'

export default ({ navigation }) => {
  const favMeals = useSelector(favoriteMeals)

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    )
  }

  useHeaderLeft(() => (
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
