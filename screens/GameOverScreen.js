import { Image, View ,Text,StyleSheet,ScrollView,useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import Colors from '../constants/colors';
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
    const {width , height} = useWindowDimensions();

    let imageSize = 300;

    if(width < 300){
        imageSize = 150;
    }
    if(height < 400){
        imageSize =80;
    }
    const imageStyle ={
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };
    return(
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer,imageStyle]}>
            <Image  style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            
                <Text style={styles.summaryText} >
                    Your phone needed 
                    <Text style={styles.highlight}>{roundsNumber} </Text>
                rounds to guess the number 
                <Text style={styles.highlight}>{userNumber}</Text> 
                </Text>
                <PrimaryButton onPress1={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
            </ScrollView>
        
    );

}

export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer:{
        //width:deviceWidth < 380 ? 150 : 300,
       // height:deviceWidth < 380 ? 150 : 300,
        //borderRadius:deviceWidth < 380 ? 75 : 150,
        borderWidth:3,
        borderColor: Colors.primary700,
        overflow:'hidden',
        margin: 36
    },
    image:{
        width:300,
        height:300
    },
    summaryText:{
        
        fontSize:22,
        textAlign:'center',
        marginBottom:24

    },
    highlight:{
       
        color:Colors.primary500
    },
    screen:{
        flex:1,

    }

})