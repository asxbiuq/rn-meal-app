import { View, Text, StyleSheet } from 'react-native'
import { useEffect, useState, useCallback } from 'react'
import useHeaderTitle from '../hooks/useHeaderTitle'
import IoniconsHeaderButton from '../components/IoniconsHeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import useHeaderRight from '../hooks/useHeaderRight'
import FilterSwitch from '../components/FilterSwitch'
import { useDispatch } from 'react-redux'
import { setFilters } from '../slice'
import useHeaderLeft from '../hooks/useHeaderLeft'
import { AntDesign } from '@expo/vector-icons'

export default ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
    }

    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, dispatch])

  useHeaderTitle(() => <Text>Filter Meal</Text>)

  useHeaderLeft(() => (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <AntDesign
        name='leftcircleo'
        size={24}
        color='black'
        onPress={() => {
          navigation.navigate('Categories')
        }}
      />
    </HeaderButtons>
  ))

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
})
