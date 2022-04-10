import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1,
     
    },
    view:{
        paddingHorizontal:30,
        marginTop:12
    },
    title:{
        textTransform:'uppercase',
        fontWeight: '700',
    },
    text:{
        fontWeight:'400',
        fontSize:12,
        color: Colors.eighth,

    }
   
})