import { View, Text, StyleSheet } from "react-native";

export default (props) => {
  return(
    <View style={styles.screen}>
      <Text>The MealDetailScreen</Text>
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