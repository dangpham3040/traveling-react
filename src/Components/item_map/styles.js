import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.second,
        height: 130,
        width: 414,
        borderRadius: 5,
        padding: 5,
        marginBottom: 17,
        flexDirection: 'row'

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
    img: {
        width: 112,
        height: 106,
        margin: 12,
        margin:12
    },
    mustdo: {
        fontWeight: '400',
        fontSize: 10,
        color: Colors.eighth,

    },
    body: {
        paddingVertical: 30
    },
    name: {
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: 14,
        color: Colors.eighth,
        flexWrap: 'wrap'
    },
    address: {
        flexWrap: 'wrap',
        fontWeight: '400',
        fontSize: 10,
        color: Colors.eighth,
        lineHeight: 16

    },
    row: {
        flexDirection: 'row',
        paddingTop: 15,
        justifyContent:'space-between',
        paddingRight:100,
      
    },
    distance: {
        fontWeight: '400',
        fontSize: 14,
        color: Colors.eighth,
    },
    view_3D: {
        backgroundColor: Colors.primary,
        height: 20,
        width: 70,
       
    },
    text_3D: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: Colors.second,
        fontWeight: '400',
        fontSize: 14,
    }
})