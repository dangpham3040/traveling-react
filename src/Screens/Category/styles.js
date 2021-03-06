import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 50,
        marginTop: 44,
        marginHorizontal: 52,
    },
    info: {
        marginHorizontal: 100,
    },
    name: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
        color: Colors.eighth,
        marginTop: 15
    },
    email: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: Colors.third
    },
    view_button: {
        flex: 1,
        marginTop: 24,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button_edit: {
        backgroundColor: Colors.primary,
        height: 50,
        width: 168,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_setting: {
        backgroundColor: Colors.third,
        height: 50,
        width: 168,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_button: {
        color: Colors.second,
        fontWeight: '700',
        fontSize: 14
    },
    body: {
        marginHorizontal: 30,
        marginTop: 24
    },
    title: {
        fontWeight: '800',
        fontSize: 18,
        color: Colors.eleven
    },
    item: {

        height: 154,
        width: '100%',
        flexDirection: 'column',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    text_mustdo: {
        fontSize: 10,
        color: Colors.eighth,
        marginLeft: 12,

    },
    item_name: {
        position: 'absolute',
        color: Colors.second,
        fontSize: 14,
        marginLeft: 12,
        marginBottom: 12,
        bottom: 0,
        fontWeight: '800',
    },
    item_name_dec: {
        position: 'absolute',
        color: Colors.second,
        fontSize: 14,
        marginLeft: 12,
        marginBottom: 12,
        bottom: 0,
        fontWeight: 'bold',
        marginBottom: 10,
        flexWrap: "wrap",
        marginRight: 40,
        fontWeight: '700'
    },
    view_item: {
        marginLeft: 30,
        marginRight: 30,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 12,
        height: 160,
        width: 360,

    },
    view_item_text: {
        backgroundColor: Colors.fifth,
    },
    Heart: {
        position: 'absolute',
        right: 16,
        top: 16
    },
    view_item_stay: {
        borderRadius: 5,
        height: 180,
        height: 172,
        marginRight: 12,
        marginBottom: 6,
        borderRadius: 5
    },
    item_stay_img: {
        height: 95,
        width: 171
    },
    item_footer: {
        position: 'absolute',
        backgroundColor: Colors.fifth,
        height: 76,
        width: '100%',
        bottom: 0,
        flexDirection: 'column'
    },
    item_text: {
        marginLeft: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        color: Colors.eleven,
        fontFamily: Fonts.font_700,
        fontSize: 14,
        marginTop: 12,
        flexWrap: "wrap",
        marginRight: 20,
        fontWeight:'700'

    },
    view_star_item: {
       marginTop:6,
        flexDirection: 'row',
        paddingLeft:10
    },
    star_item:{
        paddingHorizontal:4
    }

})