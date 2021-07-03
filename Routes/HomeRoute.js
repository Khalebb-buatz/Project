import React from 'react';
import{ NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../Screens/HomePage';
import UserRoute from './UserRoute';
import AdminRoute from './AdminRoute';
import AdminLoginPage from '../Screens/AdminLoginPage';

const stack = createStackNavigator();

const HomeRoute = () =>{
    return(
        <NavigationContainer>
            <stack.Navigator headerMode='none'>
                <stack.Screen name='Home' component={HomePage} />
                <stack.Screen name='UserRoute' component={UserRoute} />
                <stack.Screen name='AdminLoginPage' component={AdminLoginPage} />
                <stack.Screen name='AdminRoute' component={AdminRoute} />    
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeRoute;