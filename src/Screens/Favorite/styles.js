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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    header_text: {
        color: Colors.eighth,
        fontSize: 22,
        fontWeight: '800',
        textTransform: 'uppercase'
    },
    text_title: {
        marginTop: 24,
        color: Colors.eleven,
        fontSize: 18,
        fontWeight: '800',

    },
    button: {
        backgroundColor: Colors.primary,
        height: 54,
        width: 354,
        borderRadius: 5,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_button: {
        color: Colors.second,
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: 503,
        width: 354,
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
    button_model: {
        elevation: 2,
        height: 40,
        width: 140,
        padding: 10,
        borderRadius: 300
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: 'uppercase'
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

    },
    Cancel_model: {
        alignSelf: 'flex-end',
        marginRight: 30,
        marginTop: 20
    },
    input: {
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: Colors.third,
        width: 300,
        alignSelf: 'center',
        marginTop: 24,
        color: Colors.fourteenth,
        fontSize: 12,
        fontWeight: '400'
    }
})