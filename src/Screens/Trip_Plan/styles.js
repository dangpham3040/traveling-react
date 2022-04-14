import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1
    },
    map_image: {
        marginTop: 24,
        height: 180,
        width: 414,
    },
    name_city: {
        color: Colors.eleven,
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center',

    },
    day: {
        textAlign: 'center',
        marginTop: 6,
        color: Colors.eighth,
        fontWeight: '500',
        fontSize: 14,
    },
    item_choose: {
        backgroundColor: Colors.fifth,
        borderBottomColor: Colors.eighth
    },

    view_item: {
        width: 100,
        height: 36,
        borderBottomWidth: 1,
        borderBottomColor: Colors.third,
        padding: 10,
        marginLeft: 30,
        marginRight: -30
    },
    listday: {
        marginTop: 24,
        height: 95,
        flexGrow: 0
    },
    text_item: {
        color: Colors.eighth,
        fontWeight: '800',
        fontSize: 12,
        textAlign: 'center'

    },
    view_seach: {
        flexDirection: 'row',
        backgroundColor: Colors.second,
        borderRadius: 5,
        width: 354,
        height: 50,
        marginHorizontal: 30,
        borderColor: Colors.nine,
        borderWidth: 1,
        marginTop: 24,
        marginBottom: 24

    },
    shadow: {
        shadowColor: "#EDEDED",
        shadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.51,
        shadowRadius: 10,
        elevation: 20,
    },
    Seach: {
        padding: 15
    },
    data: {
        paddingHorizontal: 30,

    }
})
