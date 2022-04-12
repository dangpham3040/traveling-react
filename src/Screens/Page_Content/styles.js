import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
    },

    Image_header: {
        height: 250, width: Dimensions.get('window').width,
    },

    frames: {
        width: 383,
        height: 238,
        position: 'absolute',
        backgroundColor: Colors.second,
        marginTop: 190,
        left: 16,
        right: 16,
        borderRadius: 5,
        borderColor: Colors.nine,
        borderWidth: 1,
        paddingLeft: 15,
        paddingTop: 14,
        marginBottom: 30,
        paddingBottom: 14,
        lineHeight: 18
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

    title: {
        fontWeight: '800',
        fontSize: 16,
        textTransform: 'uppercase',
        color: Colors.eighth,
        marginTop: 7,
        marginBottom: 12,
        flexWrap: 'wrap',
        marginRight: 135
    },

    view_header: {
        height: 430,
        backgroundColor: Colors.second,

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
    line:
    {
        width: '100%',
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
        marginBottom: 6
    },
    header: {
        position: 'absolute',
        top: 0,
        flex: 1
    },
    header_food_and_drink: {
        color: Colors.eighth,
        fontWeight: '400',
        fontSize: 12
    },
    header_time: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: '400'
    },
    header_context: {
        fontSize: 12,
        fontWeight: '400',
        color: Colors.eighth,
        marginTop: 6
    },
    body: {
        marginHorizontal: 30,

    },
    body_title: {
        color: Colors.primary,
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 24,

    },
    Image_body: {
        height: 150,
        borderRadius: 5,
        width: '100%'
    },
    body_dec: {
        color: Colors.eighth,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        flexWrap: 'wrap',
        marginVertical: 12
    }
})