import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    view_item: {
        backgroundColor: Colors.fifth,
        height: 100,
        width: 354,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 12
    },
    img: {
        height: 100,
        width: 107,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    item_text: {
        flexDirection: 'column',
        marginLeft: 12,
        marginTop: 12,
        width: 192,
       
    },
    mustdo: {
        fontWeight: '400',
        fontSize: 10,
        color: Colors.eighth,
    },
    item_name: {
        color: Colors.eighth,
        fontSize: 14,
        fontWeight: '800',
        flexWrap: 'wrap',
        width:122,
    },
    Icon: {
        position: 'absolute',
    }
})