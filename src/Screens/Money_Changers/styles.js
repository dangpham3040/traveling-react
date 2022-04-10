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
        marginRight: 24
    },
    item_text: {
        color: Colors.eighth,
        fontWeight: '400',
        fontSize: 12,
        textTransform: 'uppercase',
        marginRight: 12
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 12,
        alignSelf: 'center'
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
    name: {
        fontSize: 12,
        fontWeight: '400',
        color: Colors.third,
        marginLeft: 58,
    },
    d: {
        fontWeight: '400',
        fontSize: 8,
        textAlign: 'center'

    },
    item_footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    line: {
        paddingBottom: 24,
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,

    },
    view_time: {
        flexDirection: 'row',
    },
    datetime: {
        marginHorizontal: 12,
    },
    time: {
        color: Colors.eighth,
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center'
    },
    view_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:24
    },
    box: {
        width: 173,
    },
    name_box: {
        width: '100%',
        height: 30,
        backgroundColor: Colors.eighth,
        flexDirection: 'row',
    },
    box_name: {
        color: Colors.second,
        textTransform: 'uppercase',
        alignSelf: 'center',
        flex: 4,
        textAlign:'center'

    },
    box_money:{
        height: 80,
        width: '100%',
        backgroundColor:Colors.fourteenth,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:13
    },
    num:{
        fontWeight:'700',
        fontSize:18,
        color:Colors.eighth
    },
    money_currency:{
        fontWeight:'500',
        fontSize:12,
        color:Colors.eighth
    }

})