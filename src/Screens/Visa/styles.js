import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1,

    },
    view: {
        paddingHorizontal: 30,
        marginTop: 12
    },
    title: {
        fontWeight: '700',
        marginVertical:12,
        marginBottom:6
    },
    text: {
        fontWeight: '500',
        fontSize: 12,
        color: Colors.eleven,
        flexWrap: 'wrap',
        marginTop: 6
    },
    line: {
        marginTop: 24,
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
        marginBottom:12

    },
    link:{
        color: Colors.primary,
        textDecorationLine:'underline'
    },
    _text: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.eighth,
        flexWrap: 'wrap',
      
    },
   dec:{
       color: Colors.eleven,
       fontSize:12,
       fontWeight:'300',
       flexWrap:'wrap'
   }

})