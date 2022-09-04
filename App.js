import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'


export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  // const [dataLoaded, setDataLoaded] = useState(false)

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  })

  // if (!dataLoaded) {
  //   return (
  //   <AppLoading 
  //     startAsync={fetchFonts} 
  //     onFinish={() => setDataLoaded(true)}
  //     onError={(err) => console.log(err)}
  //   />
  //   )
  // }


  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds)
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>



  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
   flex: 1
  },
});
