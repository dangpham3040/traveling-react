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
        marginVertical:12
    },
    text: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.eighth,
        flexWrap: 'wrap',
        marginTop: 6
    },
    line: {
        marginVertical: 12,
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,

    },
    link:{
        color: Colors.primary
    },
    _text: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.eighth,
        flexWrap: 'wrap',
      
    },

})