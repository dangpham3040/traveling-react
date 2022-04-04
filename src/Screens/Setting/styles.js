import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1
    },
    full_dim: {
        backgroundColor: Colors.second,
        flex: 1,
        backgroundColor:Colors.dim
    },
    body: {
        marginTop: 20,
        marginHorizontal: 30,

    },
    title: {
        marginTop: 24,
        fontWeight: '800',
        fontSize: 18,
        color: Colors.eighth
    },
    choose: {
        marginTop: 24
    },
    text_choose: {
        fontSize: 16,
        color: Colors.eighth
    },
    text_Logout: {
        fontSize: 16,
        color: Colors.primary
    },
    line:
    {
        width: '100%',
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
        marginTop: 12
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