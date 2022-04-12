import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
    },
    item: {
        flexDirection: 'column'
    },
    dot: {
        paddingHorizontal: 8
    },
    view_dot:
    {
        flexDirection: 'row',
        marginBottom: 73
    },
    ImageBackground: {
        height: 300, width: Dimensions.get('window').width,
    },
    Goback: {
        position: 'absolute',
        top: 24,
        alignSelf: 'flex-start',
        marginLeft: 30
    },
    view_item: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    frames: {
        width: 383,
        height: 126,
        position: 'absolute',
        backgroundColor: Colors.second,
        marginTop: 240,
        left: 15,
        right: 15,
        borderRadius: 5,
        borderColor: Colors.nine,
        borderWidth: 1,
        paddingLeft: 15,
        paddingTop: 14,
        marginBottom:30
        
    },
    shadow: {
        shadowColor: "#EDEDED",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.51,
        shadowRadius: 10,
        elevation: 20,
    },
    view_star: {
        flexDirection: 'row',

    },
    Star: {
        marginRight: 4
    },
    title: {
        fontWeight: '800',
        fontSize: 14,
        textTransform: 'uppercase',
        color: Colors.eighth,
        marginTop: 7,
        marginBottom: 12
    },
    view_datetime: {
        flexDirection: 'row',
        marginTop: 2,
    },
    list: {
        height: 370,
        backgroundColor:Colors.second
    },
    frames_text: {
        fontWeight: '700',
        color: Colors.eleven,
        fontSize: 12,

        flexWrap: 'wrap'
    },
    view_frames: {
        marginRight: 60,
        flexDirection: 'row'
    },
    frames_view_text: {
        marginLeft: 12,
    },
    frames_text_: {
        flexWrap: 'wrap',
        width: 120,
        fontWeight: '500',
        color: Colors.fourth,
        fontSize: 12,
    },
    view_Description: {
        marginLeft: 30,
    },
    view_all: {
        marginTop: 24,
        height: 10000,

    },
    text_Description: {
        color: Colors.eleven,
        fontWeight: '800',
        fontSize: 12,

    },
    Description: {
        color: Colors.eighth,
        fontWeight: '400',
        fontSize: 12,
        flexWrap: 'wrap',
        width: 354,
        marginTop: 6
    },
    readmore: {
        textAlign: 'right',
        marginRight: 30,
        color: Colors.primary,

    },
    map_image: {
        width: '100%',
        height: 190,
        marginTop: 24,
        marginBottom: 18
    },
    view_address: {
        marginHorizontal: 30
    },
    line:
    {
        width: '100%',
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
        marginBottom: 6
    },
    text1: {
        fontWeight: '700',
        color: Colors.eleven,
        fontSize: 12,

    },
    text2: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.fourth,
        marginTop: 4,
        marginBottom: 6
    },
    view_Comment: {
        marginHorizontal: 30,

    },
    list_Comment: {
        marginHorizontal: 30
    },
    add_Comment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
        paddingBottom: 7.5,
        marginHorizontal: 30,

    },
    input: {
        color: Colors.third,
        fontSize: 14,
        fontWeight: '400'
    },
    send: {
        marginRight: 30
    },
    view_whatnew: {
        marginHorizontal: 30
    },
    ImageBackground_new: {
        width: 140,
        height: 120,
        borderRadius: 5,
        marginLeft: 30,
        marginRight: -18,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    name_new: {
        color: Colors.second,
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: 14,
        paddingLeft: 10,
        paddingBottom: 5

    },
    new_must: {
        color: Colors.second,
        fontSize: 12,
        fontWeight: '400',
        paddingLeft: 10,
        marginBottom: 2,

    },
    header:{
        position:'absolute',
        top:0,
        flex:1
    },
    view:{
        flex:1
    }
})