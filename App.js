import { useState } from 'react';
import {StyleSheet,ImageBackground ,SafeAreaView} from 'react-native';
import{LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import  Colors  from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [userNumber,setUserNumber] =useState();
  const [gameIsOver, setGameISOver] =useState(true);
  const [guessRounds,setGuessRounds] =useState(0);
  

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameISOver(false);

  }
  function gameOverHandler(numberOfRounds){
    setGameISOver(true);
    setGuessRounds(numberOfRounds);
  }

  function StartNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);


  }
  let screen =<StartGameScreen onPickNumber ={pickedNumberHandler} />;
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }
  if(gameIsOver && userNumber){
    screen=<GameOverScreen  userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={StartNewGameHandler} />
  }
  
  return (
    <>
    <StatusBar style='light'/>
  <LinearGradient  colors={[Colors.primary800,Colors.accent500]}
  style={styles.rootScreen} > 
  <ImageBackground 
  source={require('./assets/images/denes-kozma-bOX94WfI4YE-unsplash.jpg')}
  resizeMode="cover"
  style={styles.rootScreen}
  imageStyle={styles.image}
  >
    <SafeAreaView style={styles.rootScreen}>
    {screen}
    </SafeAreaView>
    
    </ImageBackground>
  
    </LinearGradient>
    </>
    );

   
    
  
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },

  image:{
    opacity:0.15
  }
  
});
