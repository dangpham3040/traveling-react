import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    logo: {
        marginTop: 60, alignItems: 'center',
        marginLeft: 120,
        marginRight: 120
    },
    Buttonpage:
    {
        marginTop: 50,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 25,
        height:'16%'
    },
    body:
    {
        flex: 1,
    },
    Background:
    {
     marginTop:250
    },
    title_view: {
        flexDirection: 'row',
        marginBottom: 25
    },

    isnotclick: {
        width: '50%',
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.third,
    },
    isclick: {
        width: '50%',
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.primary
    },
    title:
    {
        color: Colors.fourth,
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    _title:
    {
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primary
    },
    Forgot:
    {
        fontWeight: '500',
        textAlign: 'right',
        color: Colors.third
    },
    full:
    {
        flex: 1,
        backgroundColor: Colors.second
    },
    button: {
        marginTop: 30,
        backgroundColor: Colors.primary,
        height: 55,
        width: '100%',
        borderRadius: 30
    },
    text_button:
    {
        padding: 17,
        textAlign: 'center',
        color: Colors.second,
        fontWeight: '800',
    },
    signinto: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft:20

    },
    company_logo: {
        marginRight: 20
    },
    or: {
        height: '10%',
        width: '100%',
        marginTop: 40,
        flexDirection: 'row'
    },
    line:
    {
        width: 155,
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
    },
    or_text: {
        position:'relative',
        fontWeight: '400',
        paddingTop:8,
        paddingRight: 15,
        paddingLeft: 15,
        color: Colors.fourth,
        fontSize: 14
    },
    skip:{
        marginTop:50,
        textAlign: 'center',
        fontWeight: '700',
        color: Colors.fourth,
    },
    text_link:
    {
        color:Colors.primary,
        textDecorationLine: 'underline',
        fontWeight: '400'
    },
    text:
    {
        fontWeight: '400'
    },
    terms:{
        flexDirection: 'column' ,marginTop:25
    }
})