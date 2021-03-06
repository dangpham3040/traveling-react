import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: Colors.second
    },
    ImageBackground: {
        height: 230, width: Dimensions.get('window').width
    },
    logo: {
        marginTop: 75, alignItems: 'center'
    },
    title:
    {
        fontSize: 30, color: Colors.second, textAlign: 'center', marginTop: 45
    },
    item: {
        flex: 1, flexDirection: 'column'
    },
    dot: {
        paddingHorizontal: 8
    },
    view_dot:
    {
        flexDirection: 'row', right: 35, bottom: 40, position: 'absolute'
    },
    goto: {
        position: 'absolute',
        bottom: 40,
        right: 40
    },
    view_cloud: {
        marginLeft: 32,
        marginTop: 52,
    },
    text_temperature:
    {
        left: 0,
        fontWeight: '400',
        color: Colors.second,
        fontSize: 22,
    },
    view_location: {

        marginLeft: 32,
        marginTop: 35
    },
    Location: {
        flexDirection: 'row'
    },
    Location_text:
    {
        marginLeft: 8,
        color: Colors.second,
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'center',
    },
    name_place: {
        color: Colors.second,
        fontWeight: 'bold',
        fontSize: 22
    },
    view_seach: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: Colors.second,
        borderRadius: 5,
        width: 354,
        height: 50,

        marginTop: 205,
        borderColor: Colors.nine,
        borderWidth: 1,
        width:'90%',
        alignSelf:'center'
    },
    shadow: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        elevation: 3,
        shadowOpacity:2
    },
    Seach: {
        padding: 15
    },
    avatar:
    {
        position: 'absolute',
        height: 55,
        width: 55,
        top: 38,
        right: 33,
        borderRadius: 30
    },
    view_type: {
        marginTop: 24,
        top: 24,
    },
    view_type_item: {
        marginLeft: 30,
        marginRight: -6
    },
    item_pic: {
        height: 65,
        width: 65,
        borderRadius: 30,
    },
    item_name: {
        fontWeight: 'bold',
        fontSize: 10,
        color: Colors.ten,
        textAlign: 'center',
        marginTop: 6,
        opacity: 60,
        marginBottom: 24,
    },
    view_hotnew: {
        marginTop: 24,
        marginHorizontal: 30,
        marginBottom: 12
    },
    Category: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleCategory: {
        textAlign: 'left',
        fontSize: 18,
        color: Colors.eleven,
    },
    view_all: {
        fontSize: 14,
        color: Colors.primary,
        alignSelf: 'flex-end',
        textAlign: 'center'
    },
    Image_hotnew: {
        flex: 1,
        height: 120,
        width: 140,
        borderRadius: 5,
        marginLeft: 30,
        marginRight: -18,
    },
    Image_hotnew_last: {
        height: 120,
        width: 140,
        borderRadius: 5,
        marginLeft: 30,
        marginRight: 30,
    },
    Image_top: {
        width: 240,
        height: 260,
        borderRadius: 5,
        marginLeft: 30,
        marginRight: -18
    },
    map_image: {
        marginTop: 24,
        height: 216,
        width: 414,
    },
    Image_1: {
        width: 154,
        height: 200,
        borderRadius: 5,
        marginRight: 6
    },
    Image_2: {
        width: 194,
        height: 104,
        borderRadius: 5,
        marginBottom: 5
    },
    Image_3:
    {
        width: 94,
        height: 90,
        borderRadius: 5,
        marginRight: 6
    },
    view_TopPop: {
        paddingHorizontal: 30,
        flexDirection: 'row'
    },
    load: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        alignSelf: 'center',
        color: Colors.primary,
        
    },
    view_load: {
        flex: 1,
        backgroundColor: Colors.second,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }

})