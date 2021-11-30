import React,{useEffect} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


const LoadingScreen = ({navigation}) => {

    const detectUser = async () => {
        const token = await AsyncStorage.getItem('token');
        // navigation.navigate('SetGoals');
        if(token){
            navigation.navigate('SignedIn');
        }else{
            navigation.navigate('SignedOut');
        }
    }

    useEffect(() => {
        detectUser();
    }, []);

    return (
        <View style={styles.container}>
            
            <ActivityIndicator 
                size="large"
                color="blue"
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default LoadingScreen;