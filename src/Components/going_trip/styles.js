import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    view:{
        backgroundColor: Colors.second,
        height:224,
        width:354,
        flexDirection: 'column',
        padding:12,
        borderRadius:5,
    },
    shadow: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.51,
        shadowRadius: 10,
        elevation: 20,
        borderRadius:5
    },
    trip1:{
        height:165,
        width:191,
        marginRight:8
    },
    trip23:{
        flexDirection: 'column',

    },
    trip2:{
        width:130,
        height:80,
        marginBottom:5

    },
    view_image:{
        flexDirection: 'row'
    },
    day:{
        color: Colors.primary,
        fontWeight: '400',
        fontSize:10
    },
    name:{
    color:Colors.eighth,
    fontSize:12,
    fontWeight:'800'
    }
})