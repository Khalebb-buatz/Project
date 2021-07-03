import React from 'react';
import { enableScreens } from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomePage from '../Screens/HomePage';
import AdminPage from '../Screens/AdminPage';
import UserPage from '../Screens/UserPage';

// enableScreens();
// const stack = createNativeStackNavigator();
const stack = createStackNavigator();

const UserRoute = () =>{
    return(
        
            <stack.Navigator headerMode='none' >
                <stack.Screen name='User' component={UserPage} />
                {/* <stack.Screen name='Home' component={HomePage} /> */}
                {/* <stack.Screen name='Admin' component={AdminPage} /> */}
            </stack.Navigator>
        
    )
}

export default UserRoute;