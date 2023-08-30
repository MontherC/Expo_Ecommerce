import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";


const styles = StyleSheet.create({
        textStyle:{
            fontFmaily:'bold',
            fontSize: SIZES.large,
        },
        appBarWrapper:{
            marginHorizontal: SIZES.medium,
            marginTop: SIZES.large,
        },
        appBar:{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",
        },
        location:{
            // fontFamily: 'light',
            fontSize: SIZES.medium,
            color: COLORS.darkGray,
        },
        cartCount:{
            position:"absolute",
            bottom: SIZES.medium,
            width: SIZES.medium,
            height: SIZES.medium,
            borderRadius: SIZES.small,
            alignItems:"center",
            backgroundColor:COLORS.green,
            justifyContent:"center",
            zIndex: 999
        },
        cartNumber:{
            fontFamily:'regular',
            fontSize:SIZES.xSmall,
            color: COLORS.white,
            fontWeight:600

        },
        cart:(pressed) =>[{
                opacity: pressed ? 0.5 : 1.0 
            }],
})

export default styles;