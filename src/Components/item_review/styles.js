import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
    },
    view:{
        backgroundColor:Colors.second,
        borderRadius:5,
        marginBottom:12
    },
    name:{
        flexDirection:'column'
    },
    img:{
        height:35,
        width:35,
        borderRadius:30,
        marginRight:15
    },
    body:{
        marginTop:12,
        marginLeft:16
    },
    text_name:{
        color: Colors.eleven,
        fontWeight:'700',
        fontSize:16,

    },
    date:{
        color: Colors.third,
        fontWeight:'400',
        fontSize:12,
    },
    Star:{
     alignItems:'flex-end',
     flex:1,
     marginRight:16
    },
    text:{
        color:Colors.fourth,
        fontSize:16,
        fontWeight:'500',
        marginVertical:12,
        marginRight:30,
        flexWrap:'wrap',
    
    },
    icon:{
        marginRight:5,
    },
    num:{
        marginRight:25,
        marginBottom:17
    },
    view_star:{
        flexDirection:'row'
    },
    shadow: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
            width: 1,
            height: 20,
        },
        shadowOpacity: 0.51,
        shadowRadius: 10,
        elevation: 5,
    },
})