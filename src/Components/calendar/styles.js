import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    Frame: {
        width: 294,
        height: 310,
        borderRadius: 5,
        borderColor: Colors.nine,
        borderWidth: 1
    },
    header: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15

    },
    month_year: {
        color: Colors.eighth,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.4
    },
    Drop_down_icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 11
    },
    prev_next: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        paddingRight: 20,

    },
    icon: {
        paddingHorizontal: 8
    },
    body: {
        width: "100%",
    },
    Day: {
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 24,
        marginBottom: 8,
        width: 250,
    },
    text_day: {
        color: Colors.third,
        marginRight: 5,
        height: 15,
        width: 32,
    },
    text_weekend: {
        color: Colors.primary,
        marginRight: 5,
        height: 15,
        width: 32,
    },
    view_day: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 20,
        marginLeft: 20,
        width: 250,
        height: 200,

    },
    item_day: {
        color: Colors.eighth,
        height: 15,
        width: 25,
        marginVertical: 16,
        marginHorizontal: 5,
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    item_bday: {
        color: Colors.third,
        height: 15,
        width: 25,
        marginVertical: 16,
        marginHorizontal: 5,
        flexWrap: 'wrap',
        textAlign: 'center'
    }
})