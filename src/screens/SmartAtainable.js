import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Alert,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button, DataTable } from "react-native-paper";
import styles from "./../screens/AuthScreens/authStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";
import { transparent } from "react-native-paper/lib/typescript/styles/colors";

const SmartAtainable = (props) => {
  const {navigation} = props;

  const [physicsPercent, setPhysicsPercent] = useState("");
  const [chemistryPercent, setChemistryPercent] = useState("");
  const [biologyPercent, setBiologyPercent] = useState("");
  const [mathPercent, setMathPercent] = useState("");
  return (
    <ImageBackground
      source={require("../../assets/atainable.png")}
      style={{
        flex: 1,
        bottom: 0,
        width: null,
        margin: 0,
        top: 0,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#F7F7FF",
        position: "absolute",
      }}
      imageStyle={{
        resizeMode: "cover",
        alignSelf: "flex-end",
        opacity: 0.5,
      }}
    >
      <KeyboardAvoidingWrapper>
        <View
          style={{
            paddingHorizontal: 10,
            justifyContent: "center",
            paddingBottom: 0,
            flexGrow: 1,
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
              <Text style={{ color: "#9b1b1f" }}>S M A</Text> R T
            </Text>
            <Text style={{ fontSize: 24, color: "#302f60", paddingTop: 5 }}>
              <Text style={{ color: "#9b1b1f" }}>A</Text> - ATAINABLE
            </Text>
            <Text style={{ fontSize: 17, color: "#302f60", paddingTop: 5 }}>
              Select your desirable{"\n"}
              percentage below.
            </Text>
            <View>
              <View style={style.row}>
                <View style={style.col1}>
                  <Text style={style.cellText}>Subject</Text>
                </View>
                <View style={style.col2}>
                  <Text style={style.cellText}>%</Text>
                </View>
                <View style={style.col3}>
                  <Text style={style.cellText}>Safe</Text>
                </View>
                <View style={style.col4}>
                  <Text style={style.cellText}>Moderate</Text>
                </View>
                <View style={style.col5}>
                  <Text style={style.cellText}>Aspiring</Text>
                </View>
                <View style={style.col6}>
                  <Text style={style.cellText}>Target Score</Text>
                </View>
              </View>
              <View style={style.row}>
                <View style={style.col1}>
                  <Text
                    android_hyphenationFrequency="balanced"
                    style={{ ...style.cellText, fontWeight: "500" }}
                  >
                    Physics
                  </Text>
                </View>
                <View style={style.col2}>
                <Text style={style.cellText}>0</Text>
                </View>
                <View style={style.col3}>
                <DropDown  ></DropDown>
                </View>
                <View style={style.col4}>
                <DropDown ></DropDown>
                </View>
                <View style={style.col5}>
                <DropDown></DropDown>
                </View>
                <View style={style.col6}>
                <DropDown editable = {false}></DropDown>
                </View>
              </View>
              <View style={style.row}>
                <View style={style.col1}>
                  <Text
                    android_hyphenationFrequency="balanced"
                    style={{ ...style.cellText, fontWeight: "500" }}
                  >
                    Chemistry
                  </Text>
                </View>
                <View style={style.col2}>
                <Text style={style.cellText}>0</Text>
                </View>
                <View style={style.col3}>
                <DropDown  ></DropDown>
                </View>
                <View style={style.col4}>
                <DropDown ></DropDown>
                </View>
                <View style={style.col5}>
                <DropDown></DropDown>
                </View>
                <View style={style.col6}>
                <DropDown editable = {false}></DropDown>
                </View>
              </View>
              <View style={style.row}>
                <View style={style.col1}>
                  <Text
                    android_hyphenationFrequency="balanced"
                    style={{ ...style.cellText, fontWeight: "500" }}
                  >
                    Biology
                  </Text>
                </View>
                <View style={style.col2}>
                <Text style={style.cellText}>0</Text>
                </View>
                <View style={style.col3}>
                <DropDown></DropDown>
                </View>
                <View style={style.col4}>
                <DropDown></DropDown>
                </View>
                <View style={style.col5}>
                <DropDown></DropDown>
                </View>
                <View style={style.col6}>
                <DropDown editable = {false}></DropDown>
                </View>
              </View>
              <View style={style.row}>
                <View style={style.col1}>
                  <Text
                    android_hyphenationFrequency="balanced"
                    style={{ ...style.cellText, fontWeight: "500" }}
                  >
                    Mathematics
                  </Text>
                </View>
                <View style={style.col2}>
                <Text style={style.cellText}>0</Text>
                </View>
                <View style={style.col3}>
                <DropDown></DropDown>
                </View>
                <View style={style.col4}>
                <DropDown></DropDown>
                </View>
                <View style={style.col5}>
                <DropDown></DropDown>
                </View>
                <View style={style.col6}>
                <DropDown editable = {false}></DropDown>
                </View>
              </View>
              
            </View>
            <View
              style={{
                flex: 1,
                height: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                zIndex: 100,
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
                  onPress = {()=> {navigation.navigate('SmartMeasurable');}}
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
                  onPress = {()=> {navigation.navigate('SmartTime');}}
                >
                  NEXT
                </Button>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </ImageBackground>
  );
};

function DropDown(props) {

  const [value, setValue] = useState("");
  return (
    <TextInput
          {...props}
          keyboardType="numeric"
          placeholderTextColor = "grey"
          style={{
            padding: 5,
            backgroundColor: "white",
            elevation: 7,
            fontSize: 12,
            textAlign: "center",
            borderRadius: 5,
            color: "#302f60",
            width: 30,
            height: 30,
            borderBottomWidth: 1
          }}
          autoCapitalize="none"
          value={value}
          onChangeText={(inputText) => setValue(inputText)}
        />
  );

}

const style = StyleSheet.create({
  fieldsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 7,
  },
  cellText: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    color: "#302f60",
  },
  col1: {
    width: "17%",
    justifyContent: "center",
    alignItems: "center",
  },
  col2: {
    width: "7%",
    justifyContent: "center",
    alignItems: "center",
  },
  col3: {
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
  },
  col4: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  col5: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  col6: {
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SmartAtainable;
