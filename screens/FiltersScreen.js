import { View, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";


export default ({ navigation }) => {

  const LogoTitle = () => {
    return (
      <Text>Filter Meal</Text>
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <LogoTitle {...props} />
    })
  }, [navigation])

  return(
    <View style={styles.screen}>
      <Text>The FiltersScreen</Text>
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