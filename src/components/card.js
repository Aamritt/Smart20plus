import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
    card:{
      flex: 1,
      width:"80%",
      shadowColor: "#a6a6a6",
      justifyContent: 'center',
      borderRadius: 25,
      // alignSelf: 'center',
      shadowRadius: 2,
      elevation: 10,
      backgroundColor: "white",
      paddingHorizontal: 20,
  paddingBottom: 20,
  marginBottom:20,

         }
})
export default Card;
