import { Text, StyleSheet } from "react-native";

export default (props) => {
  return (
    <Text style={styles.body}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Montserrat'
  }
})