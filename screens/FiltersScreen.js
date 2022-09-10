import { View, Text, StyleSheet,Switch } from "react-native";
import { useState } from "react";
import useHeaderTitle from "../hooks/useHeaderTitle";
import Color from '../constants/Color'

const FilterSwitch = ({label,state,onChange}) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        value={state}
        onValueChange={onChange}
        trackColor={{ true: Color.primary }}
      />
    </View>
  )
} 

export default ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const title = 'Filter Meal'

  useHeaderTitle(navigation, title)


  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch 
        label='Gluten-free' 
        state={isGlutenFree} 
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch 
        label='Lactose-free' 
        state={isLactoseFree} 
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch 
        label='Vegan'
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  },
})