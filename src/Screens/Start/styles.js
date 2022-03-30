import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    SliderBox: {
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        paddingBottom: 40,
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 15,
        marginHorizontal: 10,
        padding: 0,
        margin: 0,
    },
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
     
        padding: 10,
        alignItems: 'center',
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 15
    }

})