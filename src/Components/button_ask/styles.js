import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    view: {
        height: 45,
        width: '100%',
        backgroundColor: Colors.button,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.second,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: 240,
        width: 290,
        borderRadius: 5,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {

        borderRadius: 30,
        padding: 10,
        elevation: 2,
        height: 40,
        width: 250,
        backgroundColor: Colors.button,
        alignContent: 'flex-end',


    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        color: Colors.second,
        fontWeight: '400',

    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: Colors.eleven,
        fontSize: 12,
        marginTop: 17,
        fontWeight: '700'
    },
    buttonColor1: {
        backgroundColor: Colors.third
    },
    buttonColor2: {
        backgroundColor: Colors.primary,
        marginLeft: 12
    },
    view_button: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    line:
    {
        width: '100%',
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
    },
    input: {
        width: 250,
        height: 60,
        paddingHorizontal: 20,
        marginBottom:60
    }

})