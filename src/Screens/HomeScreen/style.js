import {  Dimensions } from 'react-native';
const {width,height} = Dimensions.get("window");
export default {
    container: {
      backgroundColor:"#F0F6FCF8",
      borderTopColor:"gray",
      borderTopWidth:1,
      borderBottomColor:"gray",
      borderBottomWidth:1,
    },
    itemContainer: {
      
      flexDirection:"row",
      padding: 8,
      backgroundColor:"#F0F6FCF8",
      justifyContent:"space-between",
    },
    titleStyle: {
      fontSize: 14,
      fontFamily: "Rubik-Regular",
      textAlignVertical:"center",
      color:"gray",
      width:width-57
    },
    userNameStyle: {
      fontSize: 14,
      fontFamily: "Rubik-Bold",
      textTransform:"uppercase",
      
    },
    searchStyle: {
      backgroundColor:"#00afdd",
      flex:1,
      position:"absolute",
      bottom:30, 
      right:30, 
      width:45, 
      height:45, 
      justifyContent:"center", 
      alignItems:"center", 
      borderRadius:30
    }
}