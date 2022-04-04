import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex:1
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 50,
        marginTop: 44,
        marginHorizontal: 52,

    },
    info: {
        marginHorizontal: 100,
    },
    camera: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0
    },
    body: {
        marginTop: 80,
        marginHorizontal: 30,

    },
    button:{
        marginTop: 30,
        backgroundColor:Colors.primary,
        height:60,
        width:'100%',
        borderRadius:5,
       
    },
    text_button:{
        padding: 15,
        textAlign: 'center',
        color: Colors.second,
        fontWeight: '800',
        fontSize:18
    },
  
        

})