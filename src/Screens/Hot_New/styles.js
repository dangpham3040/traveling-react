import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: Colors.second
    },
    image: {
        height: '100%',
        width: '100%'
    },
    view_image: {
        height: 340,
        width: 414
    },
    view_header:
    {
        marginTop: 24,
        marginLeft: 30,
        flexDirection: 'row'
    },
    today: {

        color: Colors.second,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 140
    },
    LinearGradient: {
        height: "25%", width: "100%",
        position: "absolute",
        top: 410,
        bottom: 0,
        opacity: 0.49,
    },
    view_header_body: {
        marginTop: 35,
        marginLeft: 128,
        width: Dimensions.get('window').width,
    },
    text_temperature: {
        fontWeight: '400',
        fontSize: 70,
        color: Colors.second,
        marginTop: -20
    },
    Cloud: {
        marginLeft: 140,
    },
    name: {
        color: Colors.second,
        fontSize: 18
    },
    view_header_footer: {
        marginTop: 36,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    weather: {
        paddingHorizontal:55,
        alignItems: 'center'

    },
    text_weather:{
        fontSize:20,
        color: Colors.second,
        marginTop:8

    },
    view_item:{
        color: Colors.third,
        marginHorizontal:30,
      
    },
    item_day:{
        fontWeight: '700',
        color:Colors.third,
        fontSize:12,
        marginTop:12
    },
    item_body:{
    flexDirection: 'row'
    },
    item_text:{
        fontSize:18,
        color: Colors.fourth,
        fontWeight:'500',
        paddingRight:26,
        marginTop:12
    },
    line:
    {
        marginTop:24,
        width: '100%',
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
    },
    item_icon:{
        position: 'absolute',
        right:0
    }
})