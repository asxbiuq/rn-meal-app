import { StyleSheet,View,Text,Touchable, TouchableOpacity } from "react-native"
import Colors from "../constants/Colors"


export default (props) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 18
  }
})