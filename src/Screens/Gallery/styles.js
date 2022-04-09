import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex:1
    },
    titie:{
        color: Colors.eighth,
        fontWeight:'700',
        fontSize:22,
        textAlign:'center',
        marginTop:30,
        textTransform:'uppercase',
        marginBottom:40
    },
    item_name_type: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.third,
        paddingLeft: 40,
        paddingRight: -28,
        height:20
    },
    _item_name_type: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.third,
        marginLeft: 40,
        marginRight: 12,
        marginBottom: 70
    },
    item_choose: {
        color: Colors.primary,
    },
    title: {
        color: Colors.eleven,
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center',
        width: '100%'
    },
    margin: {
        paddingHorizontal: 30
    },
    type: {
        fontWeight: '400',
        color: Colors.second,
        fontSize: 10,
        marginLeft: 10,
    },
    name: {
        color: Colors.second,
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 10,
        marginLeft: 10,
        textTransform: 'uppercase'
    },
    item_text: {
        flex: 1,
        justifyContent: 'flex-end',
        height: 50,
    },
    row: {
        flexDirection: 'row'
    },
    col: {
        flexDirection: 'column',
        marginRight: 12
    },
    activities1: {
        width: 354,
        height: 160,
        marginBottom: 12,
    },
    activities2: {
        width: 171,
        height: 178,
        marginBottom: 12
    },
    activities3: {
        width: 171,
        height: 248,
        marginBottom: 12
    },
    activities4: {
        width: 171,
        height: 228
    },
    activities5: {
        width: 171,
        height: 354,
        marginBottom: 12

    },
    activities6: {
        width: 171,
        height: 218,
        marginBottom: 12
    },
    list:{
        height:20,
        marginBottom:24
    }

})