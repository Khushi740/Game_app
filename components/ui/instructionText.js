import{Text ,StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
function InstructionText({children,style1}){
    return <Text style={[styles.instructionText,style1]}>{children}</Text>;

}

export default InstructionText;

const styles =StyleSheet.create({
    instructionText:{
        color:Colors.accent500,
        
        fontSize:24
    },
});