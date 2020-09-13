import {  Dimensions } from 'react-native';
const {width,height} = Dimensions.get("window");
export default {
    container: {
      backgroundColor:"#F0F6FCF8",
      padding:16,
      height: height
    },
    header: {
      fontSize: 24,
      color: "#000",
      marginBottom:16,
      fontFamily: 'Rubik-Bold',

    },
    textStyle: {
      marginBottom:12,
      textAlignVertical:"center",
      fontSize:14,
      fontFamily: 'Rubik-Bold',

    }
}