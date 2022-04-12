import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
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
        color: Colors.second,
        fontSize: 14,
        marginBottom: 12,
        bottom: 0,
        fontWeight: 'bold',
        marginBottom: 10,
        flexWrap: "wrap",
        marginRight: 30,
        fontWeight: '700',
        textTransform:'uppercase'
    },
    view_item: {
        flex: 1,
        height: 160,
        width: 354,
        marginBottom: 12,
        marginRight: 30,
        marginLeft: 30

    },
    Heart: {
        position: 'absolute',
        right: 16,
        top: 16
    },
    view_item_text: {
        position: 'absolute',
        bottom:10,
        marginRight:10,
        marginLeft:10,
        flex:1,
      
    },
    text_item: {
        fontSize: 10,
        color: Colors.second,
    },
})