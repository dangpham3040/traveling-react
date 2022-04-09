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
    }
})