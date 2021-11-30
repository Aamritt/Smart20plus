import React from 'react';

const AuthContext = React.createContext();
import {
    Alert,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthProvider = ({children, navigation}) => {

 
    return (
        <AuthContext.Provider value={6}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;