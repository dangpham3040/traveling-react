import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

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
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    text_mustdo: {
        fontSize: 10,
        color: Colors.eighth,
        marginLeft:12,

    },
    item_name: {
        color: Colors.eighth,
        fontSize: 14,
        marginLeft:12,
        marginBottom:12

    },
    view_item: {
        paddingHorizontal: 30,
        paddingVertical:12,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    view_item_text: {
        backgroundColor: Colors.fifth,
        
      
    }
})