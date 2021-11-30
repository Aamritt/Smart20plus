import { createStackNavigator } from 'react-navigation-stack';

import SmartMeasurable from '../screens/SmartMeasurable';
import SmartAtainable from '../screens/SmartAtainable';
import SmartSpecific from '../screens/SmartSpecific';
import SmartTime from '../screens/SmartTime';


const SetGoals = createStackNavigator(
    {
        SmartSpecific: {
            screen: SmartSpecific
        },
        SmartMeasurable: {
            screen: SmartMeasurable
        },
        SmartAtainable: {
            screen: SmartAtainable
        },
        SmartTime: {
            screen: SmartTime
        },
        
    },
    {
        initialRouteName:'SmartSpecific',
        defaultNavigationOptions:{
            headerShown: false,
           
        }
    }
)

export default SetGoals;