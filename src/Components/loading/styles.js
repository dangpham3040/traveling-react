import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    load: {
        color: Colors.primary,
        fontWeight:'700',
        fontSize:12
    },
    view_load: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        backgroundColor: Colors.second

    }
})