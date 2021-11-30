import {createStackNavigator} from 'react-navigation-stack';

import {headerRight, headerLeft} from './HeaderButtonFuntions';

import ContactUsScreen from '../screens/ContactUsScreen';
import DashBoard from '../screens/DashBoard';
import HomeScreen from '../screens/HomeScreen';

const headerStyle = {
  backgroundColor: '#1e1e2d',
};
const headerTitleStyle = {
  color: '#ffffff',
};

const DashboardStack = createStackNavigator(
  {
    Dashboard: {
      screen: DashBoard,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: () => headerRight(navigation),
        headerLeft: () => headerLeft(navigation),
        title: 'DashBoard',
        headerStyle: {...headerStyle},
        headerTitleStyle: {...headerTitleStyle},
      };
    },
  },
);

const ContactUsStack = createStackNavigator(
  {
    ContactUs: {
      screen: ContactUsScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: () => headerRight(navigation),
        headerLeft: () => headerLeft(navigation),
        title: 'ContactUs',
        headerStyle: {...headerStyle},
        headerTitleStyle: {...headerTitleStyle},
      };
    },
  },
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: () => headerRight(navigation),
        headerLeft: () => headerLeft(navigation),
        title: 'Home',
        headerStyle: {...headerStyle},
        headerTitleStyle: {...headerTitleStyle},
      };
    },
  },
);

export {DashboardStack, HomeStack, ContactUsStack};
