import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    ImageBackground: {
        width: Dimensions.get('window').width, height: Dimensions.get('window').height, justifyContent: 'center'
    },
    logo: {
        marginTop: 75, alignItems: 'center'
    },
    title:
    {
        fontSize: 30, color: '#fff', textAlign: 'center', marginTop: 45
    },
    item:{
        flex: 1, flexDirection: 'column'
    },
    dot:{
        paddingHorizontal:20 
    },
    view_dot:
    {
        marginTop: 26, flexDirection: 'row', alignSelf: 'center' 
    },
    goto:{
        position:'absolute',
        bottom:40,
        right:40
    }
})