import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        backgroundColor: Colors.second,
        flex: 1,
        paddingHorizontal:30
    },
    header: {
        width: 353,
        height: 237,
        borderRadius: 5,
        backgroundColor: Colors.sixth,
        marginVertical: 40,
        paddingLeft: 10,
        paddingTop: 12,
        paddingBottom: 24,
        paddingRight: 10
    },
    hello: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: '500'
    },
    wellcome: {
        flexWrap: 'wrap',
        marginRight: 40,
        color: Colors.eighth,
        fontWeight: '700',
        fontSize: 30
    },
    footer_banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24
    },
    img: {
        width: 80,
        height: 80,
        backgroundColor: Colors.third,
        borderRadius: 50
    },
    button_mytrip: {
        backgroundColor: Colors.primary,
        width: 86,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    text_mytrip: {
        color: Colors.second,
        fontWeight: '700',
        fontSize: 14
    },
    logo: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 5,
        marginBottom:15
    },
    list:{
       
    }
})