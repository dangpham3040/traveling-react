import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    view: {
        width: 62,
        height: 62,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.fifth,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'

    },
    text: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.eleven,
        marginTop: 7,
        textTransform: 'uppercase',
        textAlign: 'center',
        width: 88,
        height: 28
    },
    _text: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.eleven,
        marginTop: 7,
        textAlign: 'center',
        textTransform: 'uppercase',
        width: 88,
        height: 28,
        marginLeft:17
    },
    full: {
        width: 88,
        height: 70,
        marginLeft: 10,
        marginRight: 35,
        marginBottom: 50

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: 187,
        width: 353,
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

        borderRadius: 5,
        padding: 10,
        elevation: 2,

        height: 40,
        width: 142
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: Colors.eighth,
        fontSize: 20,
        marginTop: 24
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
    }

})