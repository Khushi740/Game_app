import {Text,StyleSheet,Platform} from 'react-native';

function Title({children}){
    return  <Text style={styles.title}>{children}</Text>

}

export default Title;

const styles =StyleSheet.create({
    title:{
        
        fontSize:18,
        color:'white',
        textAlign:'center',
        borderWidth:Platform.OS === 'android' ? 2 : 0,
        borderColor:'white',
        padding:12,
        marginTop:16,
        maxWidth:'80%',
        width:300
    }
})