import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  // TextInput
} from 'react-native';
import {
  TextInput,
  Button,
  ActivityIndicator,
  Checkbox,
} from 'react-native-paper';

import Loader from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './authStyle';

import Card from '../../components/card';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const SignUpScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  //* TandC_checked => Term and condition check box

  const [isLoading, setIsLoading] = useState(false);

  const sendCredentials = () => {
    // fetch("http://10.0.2.2:3000/api/v1/users/signup",{
    //     method:"POST",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body:JSON.stringify({
    //         "name":userName,
    //         "mobile":mobile,
    //         "password":password,
    //         "workAt":[]
    //     })
    // })
    // .then(response => response.json())
    // .then(async (data) => {
    //     console.log(data.status);
    //     try{
    //         setIsLoading(true);
    //         await AsyncStorage.setItem('token', data.token);
    //         navigation.replace('OrganizationList');
    //         setIsLoading(false);
    //     }catch(error){
    //         Alert.alert(error);
    //     }
    // })
    // .catch(err => console.log("Error - ", err));
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // navigation.navigate('SignedIn');
      navigation.navigate('SetGoals');
    }, 3000);
  };

  return (
    <ImageBackground
      source={require('./../../../assets/parent4.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <KeyboardAvoidingWrapper>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./../../../assets/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>

          <Card>
            <TextInput
              placeholder="Enter Email or Username"
              dense="true"
              // mode="outlined"
              theme={{
                colors: {
                  primary: 'blue',
                },
              }}
              style={styles.textInput}
              autoCapitalize="none"
              value={email}
              onChangeText={inputText => setEmail(inputText)}
            />
            <TextInput
              placeholder="Full Name"
              dense="true"
              // mode="outlined"
              theme={{
                colors: {
                  primary: 'blue',
                },
              }}
              style={styles.textInput}
              autoCapitalize="none"
              value={userName}
              onChangeText={inputText => setUserName(inputText)}
            />
            <TextInput
              placeholder="Pin Code"
              dense="true"
              // mode="outlined"
              theme={{
                colors: {
                  primary: 'blue',
                },
              }}
              style={styles.textInput}
              keyboardType="numeric"
              value={pinCode}
              onChangeText={inputText => setPinCode(inputText)}
            />
            <TextInput
              placeholder="Phone"
              dense="true"
              // mode="outlined"
              theme={{
                colors: {
                  primary: 'blue',
                },
              }}
              style={styles.textInput}
              keyboardType="numeric"
              value={mobile}
              onChangeText={inputText => setMobile(inputText)}
            />

            <TextInput
              placeholder="Password"
              dense="true"
              // mode="outlined"

              style={styles.textInput}
              secureTextEntry
              value={password}
              onChangeText={inputText => setPassword(inputText)}
            />
            <TextInput
              placeholder="Confirm Password"
              dense="true"
              // mode="outlined"

              style={styles.textInput}
              secureTextEntry
              value={confirmPassword}
              onChangeText={inputText => setConfirmPassword(inputText)}
            />

            <View
              style={{
                alignSelf: 'center',
              }}></View>

            <Button
              mode="contained"
              style={styles.button}
              onPress={() => {
                if (userName === '' || mobile === '' || password === '') {
                  return Alert.alert('Please fill the above fields properly.');
                }
                if (mobile.length != 10) {
                  return Alert.alert('Please enter a 10 digit mobile number');
                }
                if (password != confirmPassword) {
                  return Alert.alert('Password do not match');
                }

                // ToastAndroid.show("Please wait.", ToastAndroid.LONG);
                sendCredentials();
              }}>
              Sign Up
            </Button>

            {/* <ActivityIndicator animating={isLoading}/>
             */}

            <Loader
              visible={isLoading}
              textContent="Please wait"
              textStyle={styles.loaderTextStyle}
              color="#fff"
              animation="fade"
            />

            <TouchableOpacity
              style={styles.textStyle}
              onPress={() => navigation.navigate('LogIn')}>
              <Text style={{color: 'black'}}>
                Already have an account? Log In.
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </KeyboardAvoidingWrapper>
    </ImageBackground>
  );
};

export default SignUpScreen;
