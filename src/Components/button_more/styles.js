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

    }

})