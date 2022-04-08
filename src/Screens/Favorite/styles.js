import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1,
        padding: 30
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        right: 0,
        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:40
    },
    header_text:{
        color: Colors.eighth,
        fontSize:22,
        fontWeight:'800',
        textTransform: 'uppercase'
    },
    text_title:{
        marginTop:24,
        color: Colors.eleven,
        fontSize:18,
        fontWeight: '800',
        
    },
    button:{
        backgroundColor: Colors.primary,
        height:54,
        width:354,
        borderRadius:5,
        marginTop:24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_button:{
        color: Colors.second,
        fontWeight: '700',
        fontSize:18,
        textAlign: 'center'
    }
})