import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    view_header: {
        backgroundColor: '#fff',
        width: '100%',
        backgroundColor: Colors.second,
        paddingHorizontal: 30,
        paddingTop: 25,
    },
    line:{
        paddingBottom: 24,
        borderBottomColor: Colors.third,
        borderBottomWidth: 1,
      
    },
    Cancel:
    {
        alignSelf: 'flex-end',
    },
    name:{
        color:Colors.eleven,
        fontWeight:'700',
        fontSize:20,
        flexWrap:'wrap',
        marginRight:140

    },
    dec:{
        color:Colors.eleven,
        fontWeight:'500',
        fontSize:12,
        flexWrap:'wrap',
        width:354,
        marginTop:24,
        height:70
    }

})