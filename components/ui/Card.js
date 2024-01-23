import{View,StyleSheet,Dimensions} from 'react-native';
import Colors from '../../constants/colors';
function Card({children}){
    return <View style={styles.card}>
        {children}

    </View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles =StyleSheet.create({
    card:{
        padding:20,
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary700,
        borderRadius:8,

        elevation:4,
        alignItems:'center'
    },

});