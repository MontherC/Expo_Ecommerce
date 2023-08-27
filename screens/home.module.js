import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";


const styles = StyleSheet.create({
        textStyle:{
            fontFmaily:"bold",
            fontSize: SIZES.large,
        },
        appBarWrapper:{
            marginHorizontal: SIZES.medium,
            marginTop: SIZES.small,
        },
        appBar:{
            flex:1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",
        },
        location:{
            fontFamily: "light",
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
            zIndex: -1
        }
})

export default styles;