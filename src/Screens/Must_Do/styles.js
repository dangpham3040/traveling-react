import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1
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
        marginRight:12
    },
    attraction1: {
        height: 180,
        width: 354,
        marginTop: 12,
        marginBottom: 12
    },
    attraction2: {
        height: 147,
        width: 171,
        marginBottom: 12
    },
    attraction3: {
        height: 192,
        width: 171,
        marginBottom: 12
    },
    attraction4: {
        height: 354,
        width: 171,
        marginBottom: 12,
       
        marginBottom: 24
    },
    activities1: {
        width: 354,
        height: 150,
        marginBottom: 12,
        marginTop: 12
    },
    activities2: {
        width: 171,
        height: 267,
        marginBottom:12
    },
    activities3: {
        width: 171,
        height: 223,
        marginBottom:12
    },
    activities4:{
        width: 171,
        height:198
    },
    activities5:{
        width:171,
        height:137,
        marginBottom:12

    },
    activities6:{
        width:171,
        height:188,
        marginBottom:12
    },
    activities7:{
        width:171,
        height:153,
        marginBottom:12
    },
    activities8:{
        width:171,
        height:198,
       
    }

})