import{View,TextInput,StyleSheet,Alert,
    useWindowDimensions,KeyboardAvoidingView,ScrollView} from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';
function StartGameScreen({onPickNumber}){

    const [enteredNumber,setEnteredNumber]=  useState('');

    const  { width , height} = useWindowDimensions();
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid','number has to ba number',
            [{text: 'Okay', style: 'destructive',onPress:resetInputHandler}]
            );
            return;
        }

        onPickNumber(chosenNumber);

    }

    const marginTopDistance = height < 380 ? 30 : 100;
    
    return(
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <KeyboardAvoidingView style={styles.rootContainer} behavior='position'>

        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess My Number</Title>
        <Card>
            <InstructionText>Enter a Number</InstructionText>

            <TextInput style={styles.numberInput}
             keyboardType='number-pad'
             maxLength={2}
             onChangeText={numberInputHandler}
             value={enteredNumber}/>
             <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
            <PrimaryButton onPress1={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress1={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
            </View>
            
        
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );

}

export default StartGameScreen;


const styles= StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems:'center',
    },
    
    
    numberInput:{
        height:50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:'bold',
        width:50,
        textAlign:'center',

    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1,
    },
    rootContainer1:{
        flex: 1,
        alignItems:'center',
    },
    


});