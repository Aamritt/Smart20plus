import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems:'center',
      // paddingBottom: 40,
      // marginBottom: 10,
     bottom:0,
     width:"100%",
//   paddingTop:20
     marginLeft:0,
  
  
    },
    backgroundImage: {
        justifyContent:'flex-end',
        alignItems:"flex-end",
      flexGrow:1,
      // backgroundColor: "#bfbfe9",
      bottom: 0,
      alignItems:'center',
      margin:0,
      padding:0,
    },
  
  
    logoContainer: {
      flexGrow: 1,
      width: 150,
      height: 150,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      alignSelf:'flex-start',      
      // paddingTop: 10,
      // marginBottom: 20
      paddingLeft:0,
      marginLeft:25,
      backgroundColor:'transparent',
    },
    logo: {
      width: "100%",
      height: "100%",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      // position: 'relative',
      // objectFit: 'contain',
      // alignSelf: 'left',
      // marginBottom: 30,
      paddingLeft:0,
      marginLeft:0,
      // marginTop: 10,
      // paddingTop:10,
      // margin:30
    },
    textInput: {
      padding: 0,
      //    marginLeft:40,
      // marginBottom:8,
      // marginHorizontal:8,
      // marginRight:40,
      // backgroundColor:'#ebf5fb',
      paddingTop: 12,
      backgroundColor: "white",
      // shadowColor: "#000",
      // shadowOffset: {
      //       width: 0,
      //       height: 10,
      // },
      // shadowOpacity: 0.12,
      // shadowRadius: 60,
    },
    button: {
      marginHorizontal: 55,
      marginBottom: 10,
      marginTop: 20,
      backgroundColor: "#1A5276",
      borderRadius: 25,
    },
    textStyle: {
      alignSelf: "center",
    },
  
    loaderTextStyle: {
      color: "white",
      marginBottom: 45,
    },
  
  });

  export default styles;