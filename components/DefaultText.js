import { Text, StyleSheet } from "react-native";

export default ({children}) => {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans-bold'
  }
})