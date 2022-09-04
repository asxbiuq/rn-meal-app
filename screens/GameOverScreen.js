import { View, Text, StyleSheet, Button, Image } from 'react-native'
import BodyText from '../components/BodyText'


export default (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <Image 
        //source={require('../assets/favicon.png')} 
        source={{uri: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'}} 
        style={styles.image}
        resizeMode='cover'
      />
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title='New Game' onPress={props.onRestart}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '5rem',
    height: '5rem'
  }
})