import { View, Text, StyleSheet, Button } from 'react-native'

export default (props) => {
  return (
    <View style={styles.header}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title='New Game' onPress={props.onRestart}/>
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