import React from 'react';
import LogOutButton from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Octicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity, ToastAndroid, Keyboard} from 'react-native';



const headerLeft = (navigation) => <Icon 
    name='three-bars' 
    size={30} 
    color='#ffffff' 
    style={{marginLeft:10}}
    onPress={() =>{ navigation.toggleDrawer(); Keyboard.dismiss()}}
/>;

const headerRight = (navigation) => {
    return (
        <TouchableOpacity
            style={{marginRight:10}}
            onPress={async () => {
                await AsyncStorage.removeItem('token')
                navigation.navigate('LogIn')
                ToastAndroid.show('Logged out succesfully',ToastAndroid.SHORT)
            }}
        >
            <LogOutButton 
                name="exit-to-app"
                size={26}
                color='#ffffff'
            />
        </TouchableOpacity>
    )
}

export {headerLeft, headerRight}
