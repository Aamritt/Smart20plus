import React, {useState} from 'react';

import {
  StyleSheet,
  Image,
  Alert,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

import Loader from 'react-native-loading-spinner-overlay';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './authStyle';

import Card from '../../components/card';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const sendLogInCredentials = () => {
    //     fetch("http://10.0.2.2:3000/api/v1/users/login",{
    //         method:"POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify({
    //             "mobile":mobile,
    //             "password":password,
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(async (data) => {
    //         console.log(data);
    //         try{
    //             setIsLoading(true);
    //             await AsyncStorage.setItem('token', data.token);
    //             navigation.replace('OrganizationList');
    //             setIsLoading(false);
    //         }catch(error){
    //             Alert.alert(error);
    //         }
    //     })
    //     .catch(err => console.log("Error - ", err));
    // }
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
          <Card style={{minHeight: 300, marginTop: 20}}>
            <TextInput
              placeholder="E-mail"
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
              placeholder="Password"
              dense="true"
              // mode="outlined"
              theme={{
                colors: {
                  primary: 'blue',
                },
              }}
              style={styles.textInput}
              secureTextEntry
              value={password}
              onChangeText={inputText => setPassword(inputText)}
            />

            <TouchableOpacity>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  color: 'blue',
                  marginRight: 17,
                }}>
                Forget Password
              </Text>
            </TouchableOpacity>

            <Button
              mode="contained"
              style={styles.button}
              onPress={() => {
                if (email === '' || password === '') {
                  return Alert.alert('Please fill the above fields properly.');
                }

                // ToastAndroid.show("Please wait.", ToastAndroid.LONG);
                sendLogInCredentials();
              }}>
              Log In
            </Button>

            <Loader
              visible={isLoading}
              textContent="Please wait"
              textStyle={styles.loaderTextStyle}
              color="#fff"
              animation="fade"
            />

            <TouchableOpacity
              style={styles.textStyle}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: 'black'}}>
                Don't have an account? Sign Up.
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </KeyboardAvoidingWrapper>
    </ImageBackground>
  );
};

export default LogInScreen;
