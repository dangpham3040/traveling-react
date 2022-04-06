import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
    view_header: {
        height: 62,
        backgroundColor: '#fff',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 24,
        justifyContent: 'space-between',
        backgroundColor:Colors.primary,
        marginBottom:30
      
    },
    dim:{
        backgroundColor: Colors.dim
    },        
    title: {
        flex: 12,
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.second,
        textAlign: 'center',
    },
    Goback: {
        flex: 1,
    },
    Cancel:
    {
        flex:1,
        alignItems: 'flex-end'
    }

})