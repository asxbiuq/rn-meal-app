import { View, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"

export default (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Course Goal'  
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='add' onPress={props.onAddGoal.bind(this, enteredGoal)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
})