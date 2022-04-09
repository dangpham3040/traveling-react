import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    body:
    {
        flex: 1
    },
    Background:
    {
        marginTop: 250
    },
    title_view: {
        flexDirection: 'row',
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


})