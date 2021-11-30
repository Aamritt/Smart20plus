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
// import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


const SmartTime = (props) => {
  const {navigation} = props;

  const [noOfDays, setnoOfDays] = useState();
  const [date, setdate] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const setPeriod = (inputText) => {

    setnoOfDays(inputText);
    if (inputText == "") {
      setdate("");
      return;
    }
    let period = new Date();
    period.setDate(period.getDate() + parseInt(inputText));
    console.log(period);
    let formattedDate = `${period.getDate()}/${period.getMonth() + 1}/${period.getFullYear()}`;
    setdate(formattedDate);
  }


  return (
    <ImageBackground
      source={require("../../assets/timebound.png")}
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

      }}
    >
      <KeyboardAvoidingWrapper>
        <View
          style={{
            paddingTop: 10,
            paddingHorizontal: 20,
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
            <Text style={{ fontSize: 24, color: "#9b1b1f" }}>
              S M A R T
            </Text>
            <Text style={{ fontSize: 24, color: "#302f60", paddingTop: 5 }}>

              <Text style={{ color: "#9b1b1f" }}>T</Text> - Time Bound
            </Text>
            <Text style={{ fontSize: 17, color: "#302f60", paddingTop: 5 }}>
              Enter period in which you {"\n"}want to achieve desired{"\n"}
              percentages
            </Text>
            <View
              style={style.inputcontainer}
            >
              <View>
                <Text style={{color: "#302f60"}}>No. of Days</Text>
              </View>
              <View style={{ width: "60%" }}>
                <TextInput
                  placeholder="Please Enter Value"
                  placeholderTextColor = "grey"
                  keyboardType="numeric"
                  style={style.inputStyle}
                  autoCapitalize="none"
                  value={noOfDays}
                  onChangeText={setPeriod}
                />
              </View>
            </View>
            <View
              style={style.inputcontainer}
            >
              <View>
                <Text style={{color: "#302f60"}}>Period</Text>
              </View>
              <View style={{ width: "60%" }}>
                <Input
                  // placeholder='Period'
                  value={date}
                  disabled={true}
                  style={{
                    textAlign: "center",
                  }}
                  inputContainerStyle={{

                    borderWidth: 0,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    height: 35,
                    alignSelf: "flex-end",
                    borderColor: 'white',
                    elevation: 7,


                  }}
                  containerStyle={{
                    marginTop: 15,

                    marginLeft: 0,
                  }}
                  rightIcon={
                    <Button>

                      <Icon
                        name='calendar'
                        size={20}
                        color='black'
                      />

                    </Button>
                  }
                >

                </Input>
              </View>
            </View>

            {/* <FieldsContainer
              subject="Period"
              
              textvalue={date}
              setValue={setdate}
              
            ></FieldsContainer>
             <Button
              mode="contained"
              color="#8d909c"
              onPress={() => setIsVisible(true)}
              style={{
                // marginHorizontal: 55,
                marginBottom: 10,
                marginTop: 20,
                backgroundColor: "#f3f6f9",
                borderRadius: 12,
                elevation: 7,

              }}
            >
              Open Calendar
            </Button> */}
            {/* <Button>
              <Icon name="calendar" size={20} color="#9b1b1f" />
            </Button> */}



            {/* 
         <TextInput
           subject="Period" 
           keyboardType="numeric"
             placeholder="Enter Your Email Here"
             style={{
              padding: 5,
              backgroundColor: "white",
              elevation: 7,
              fontSize: 12,
              textAlign: "center",
              borderRadius: 10,
            }}
         /> */}





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
                  onPress = {()=> {navigation.navigate('SmartAtainable');}}
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
                  onPress = {()=> {navigation.navigate('SignedIn');}}
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

const CalendarModal = props => {
  const [selectedStartDate, setSelectedStartDate] = useState("");

  const onDateChange = (date) => {
    setSelectedStartDate(date);

  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <CalendarPicker
          onDateChange={onDateChange}
        />
      </View>
    </Modal>
  )
}


const style = StyleSheet.create({
  fieldsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  inputStyle: {
    padding: 5,
    backgroundColor: "white",
    elevation: 7,
    fontSize: 16,
    textAlign: "center",
    borderRadius: 10,
    color: "#302f60"
  },
  calendar: {
    // flex: 1,
    backgroundColor: '#FFFFFF',

  },


});

export default SmartTime;
