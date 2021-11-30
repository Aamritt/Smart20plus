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
import { Button } from "react-native-paper";
import styles from "./../screens/AuthScreens/authStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

const SmartMeasurable = (props) => {
  const { navigation } = props;
  const [physicsPercent, setPhysicsPercent] = useState("");
  const [chemistryPercent, setChemistryPercent] = useState("");
  const [biologyPercent, setBiologyPercent] = useState("");
  const [mathPercent, setMathPercent] = useState("");
  return (
    <ImageBackground
      source={require("../../assets/SmartMeasurable.png")}
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
              <Text style={{ color: "#9b1b1f" }}>S M</Text> A R T
            </Text>
            <Text style={{ fontSize: 24, color: "#302f60", paddingTop: 5 }}>
              {" "}
              <Text style={{ color: "#9b1b1f" }}>M</Text> - MEASURABLE
            </Text>
            <Text style={{ fontSize: 17, color: "#302f60", paddingTop: 5 }}>
              Enter percentages of {"\n"}
              your previous achivement.
            </Text>

            <FieldsContainer
              subject="physics"
              textvalue={physicsPercent}
              setValue={setPhysicsPercent}
            ></FieldsContainer>
            <FieldsContainer
              subject="Chemistry"
              textvalue={chemistryPercent}
              setValue={setChemistryPercent}
            ></FieldsContainer>
            <FieldsContainer
              subject="Biology"
              textvalue={biologyPercent}
              setValue={setBiologyPercent}
            ></FieldsContainer>
            <FieldsContainer
              subject="Mathematics"
              textvalue={mathPercent}
              setValue={setMathPercent}
            ></FieldsContainer>
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
                    navigation.navigate("SmartAtainable");
                  }}
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

const FieldsContainer = ({ subject, textvalue, setValue }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={{}}>
        <Text style={{color: "#302f60"}}>{subject}</Text>
      </View>
      <View style={{ width: "60%" }}>
        <TextInput
          placeholder="Please enter your previous % here"
          keyboardType="numeric"
          placeholderTextColor = "grey"
          style={{
            padding: 5,
            backgroundColor: "white",
            elevation: 7,
            fontSize: 12,
            textAlign: "center",
            borderRadius: 10,
            color: "#302f60"
          }}
          autoCapitalize="none"
          value={textvalue}
          onChangeText={(inputText) => setValue(inputText)}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  fieldsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
});

export default SmartMeasurable;
