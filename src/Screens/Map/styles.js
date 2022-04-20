import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1,
    },
    view: {
        paddingHorizontal: 30,
        marginTop: 12
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: '700',
    },
    text: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.eighth,

    },
    list: {
        marginHorizontal: 30
    },
    item: {
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.third,
        paddingVertical: 20,

    },
    Img: {
        width: 27,
        height: 20,
        marginRight: 24,
        marginLeft: 20
    },
    name: {
        color: Colors.eighth,
        fontWeight: '400',
        fontSize: 12,
        textTransform: 'uppercase'
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 12
    },
    row: {
        flexDirection: 'column',

    },
    text_item: {
        marginRight: 20,
        flexWrap: 'wrap',
        color: Colors.eighth,
        fontSize: 12,
        fontWeight: '400'
    },
    view_text: {
        marginTop: 15,
    },
    item_choose: {
        backgroundColor: Colors.check_Language
    },
    item_type: {
        marginLeft: 30,
        borderRadius: 30,
        borderColor: Colors.third,
        borderWidth: 1,
        height: 30,
        paddingHorizontal: 10,
        marginRight: -16,
        marginBottom:30
    },
    item_type_name: {
        padding: 5,
        fontWeight: '500',
        fontSize: 14,
        color: Colors.third
    },
    img_sty: {
        height: 761,
        width: 414,
    }

})