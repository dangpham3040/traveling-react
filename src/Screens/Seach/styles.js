import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second
    },
    view_seach: {
        flex:1,
      
        flexDirection: 'row',
        backgroundColor: Colors.second,
        borderRadius: 5,
        width: 354,
        height: 50,
        marginHorizontal:30,
        borderColor: Colors.nine,
        borderWidth: 1,
        marginTop:24,
        marginBottom:24
    },
    shadow: {
        shadowColor: "#EDEDED",
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.51,
        shadowRadius: 10,
        elevation: 20,
    },
    Seach: {
        padding: 15
    },
    item_name:{
        fontSize:14,
        fontWeight: 'bold',
        color: Colors.third,
        paddingLeft:40,
        paddingRight:-28,
    },
    _item_name:{
        fontSize:14,
        fontWeight: 'bold',
        color: Colors.third,
        paddingLeft:40,
        paddingRight:12,
    },
    item_choose:{
        color: Colors.primary,
    }

})