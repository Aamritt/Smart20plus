import React, { useState } from "react";

import {
  StyleSheet,
  Image,
  Alert,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

import { TextInput, Button } from "react-native-paper";

import Unorderedlist from "react-native-unordered-list";

import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./../screens/AuthScreens/authStyle";
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

const SmartSpecific = (props) => {
  const { navigation } = props;
  return (
    <ImageBackground
      source={require("../../assets/specific.png")}
      style={{
        flex: 1,
        bottom: 0,
        width: null,
        margin: 0,
        top: 0,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#F7F7FF",
      }}
      imageStyle={{
        resizeMode: "cover",
        alignSelf: "flex-end",
      }}
    >
      <KeyboardAvoidingWrapper>
        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: "center",
            paddingBottom: 0,
          }}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo.png")}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View style={{ justifyContent: "space-between", color: "#302f60" }}>
            <Text style={{ fontSize: 24, color: "#302f60" }}>
              <Text style={{ color: "#9b1b1f" }}>S</Text> M A R T
            </Text>
            <Text style={{ fontSize: 24, color: "#302f60", paddingTop: 5 }}>
              {" "}
              <Text style={{ color: "#9b1b1f" }}>S</Text> - SPECIFIC
            </Text>
            <Text style={{ fontSize: 17, color: "#302f60", paddingTop: 5 }}>
            You have selected
            </Text>
            <Unorderedlist color = "#302f60" style={{ fontSize: 16, fontWeight: "bold",paddingTop: 10}}>
                <View style = {{flexDirection: "row", width: '100%', alignContent: "center", paddingTop: 10}}>
              <Text style={{ fontSize: 14, color: "#302f60" }}>
                {" "}
                Board -</Text> 
                <Text style={{ fontWeight: "bold", color: "#302f60", marginLeft: 30 }}> CBSE BOARD </Text>
                </View>
            </Unorderedlist>
            <Unorderedlist color = "#302f60" style={{ fontSize: 16, fontWeight: "bold",paddingTop: 10}}>
                <View style = {{flexDirection: "row", width: '100%', alignContent: "center", paddingTop: 10}}>
              <Text style={{ fontSize: 14, color: "#302f60" }}>
                {" "}
                Class -</Text> 
                <Text style={{ fontWeight: "bold", color: "#302f60", marginLeft: 30 }}> 10th </Text>
                </View>
            </Unorderedlist>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <Button
                mode="contained"
                color="#8d909c"
                style={{
                  // marginHorizontal: 55,
                  marginBottom: 10,
                  marginTop: 20,
                  backgroundColor: "#f3f6f9",
                  borderRadius: 12,
                  elevation: 7,
                }}
                onPress={() => {
                  navigation.navigate("SmartSpecific");
                }}
              >
                Previous
              </Button>
            </View>
            <View style={{}}>
              <Button
                mode="contained"
                color="#8d909c"
                style={{
                  // marginHorizontal: 55,
                  marginBottom: 10,
                  marginTop: 20,
                  backgroundColor: "#f3f6f9",
                  borderRadius: 12,
                  elevation: 7,
                }}
                onPress={() => {
                  navigation.navigate("SmartMeasurable");
                }}
              >
                NEXT
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({});

export default SmartSpecific;
