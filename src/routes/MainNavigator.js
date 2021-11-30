import React from 'react';
import {TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';

import { createAppContainer, createSwitchNavigator,SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import LogInScreen from '../screens/AuthScreens/LogInScreen';
import SignUpScreen from '../screens/AuthScreens/SignUpScreen';
import LoadingScreen from '../screens/Loader/LoadingScreen';

import { DashboardStack, ContactUsStack, HomeStack } from './ScreenStack';
import SetGoals from './SetGoalsNavigator';

const AuthStackNavigator = createStackNavigator(
    {
        LogIn:{
            screen:LogInScreen,
        },
        SignUp:{
            screen:SignUpScreen,
        },
    },
    {
        initialRouteName:'SignUp',
        defaultNavigationOptions:{
            headerShown: false,
           
        }
    },
    
);


const RootDrawerNavigator = createDrawerNavigator(
    {
        OrganizationList: {
            screen: DashboardStack,
            navigationOptions:{
                drawerLabel: 'Dashboard'
            }
        },
        Home:{
            screen:HomeStack,
            navigationOptions:{
                drawerLabel: 'Users'
            }
        },
        ContactUs:{
            screen:ContactUsStack,
        },   
      
    },
    {
        drawerBackgroundColor: '#1e1e2d',
        // drawerType: 'slide',
        drawerWidth: '70%',
        contentComponent: props => {
            return (
              <ScrollView>
                <SafeAreaView style={{ flex: 1, paddingTop: 50}} forceInset={{ top: 'always', horizontal: 'never' }}>
                  <DrawerItems {...props} />
                </SafeAreaView>
              </ScrollView>
            );
          },
          contentOptions: {
            activeTintColor: '#ffffff',
            inactiveTintColor: '#7b7c8e',
            itemsContainerStyle: {
              marginVertical: 0,
            },
            iconContainerStyle: {
              opacity: 1
            }
          },
          keyboardDismissMode: 'none'
    }
);

const MainNAvigator = createSwitchNavigator({
    AppLoading: {
        screen: LoadingScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    SetGoals: {
        screen: SetGoals,
        navigationOptions:{
            headerShown: false,
        }
    },
    SignedOut: {
        screen: AuthStackNavigator,
        navigationOptions:{
            headerShown: false,
        }
    },
    SignedIn: {
        screen: RootDrawerNavigator,
        navigationOptions:{
            headerShown: false,
        }
    },
})

export default createAppContainer(MainNAvigator);