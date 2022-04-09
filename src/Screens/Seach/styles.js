import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from "../../Utils/Fonts"

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second
    },
    view_seach: {
        flex: 1,

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
    item_name_type: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.third,
        paddingLeft: 40,
        paddingRight: -28,
        marginBottom: 70
    },
    _item_name_type: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.third,
        marginLeft: 40,
        marginRight: 12,
        marginBottom: 70
    },
    item_choose: {
        color: Colors.primary,
    },
    view_item: {
        flex: 1,
        height: 160,
        width: 354,
        marginBottom: 12,
        marginRight: 30,
        marginLeft: 30
    },
    view_item_text: {
        position: 'absolute',
        bottom: 0,
        left: 10
    },
    text_item: {
        fontSize: 10,
        color: Colors.second,
    },
    item_name: {
        color: Colors.second,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        flexWrap: "wrap",
        marginRight: 40,
        fontFamily:Fonts.font_700
    },
    Heart: {
        position: 'absolute',
        top: 16,
        right: 16
    }

})