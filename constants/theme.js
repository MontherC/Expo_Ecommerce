import { Dimensions } from "react-native-web";
const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: "white",
    secondary: "grey",
    tertiary:"black",

    gray:"#88837A",
    darkGray:"#666358",
    white:"#FFFFFF",
    offwhite: "#F3F2F2",
    black:"#000000",
    red:"ff1c1c",
    green:"#37e666",
}


const SIZES ={
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
}


const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    }
}

export { SIZES, COLORS, SHADOWS };