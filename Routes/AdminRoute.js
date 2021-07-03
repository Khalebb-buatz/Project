import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import AdminPage from '../Screens/AdminPage';
import AdminAddPage from '../AdminScreens/AdminAddPage';
import AdminChangePage from '../AdminScreens/AdminChangePage';
import AdminDeletePage from '../AdminScreens/AdminDeletePage';

// enableScreens();
// const stack = createNativeStackNavigator();
const stack = createStackNavigator();

const AdminRoute = () =>{
    return(
        <stack.Navigator>
            <stack.Screen name='AdminPage' component={AdminPage} options={{title:'Admin Page'}}/>
            <stack.Screen name='AddPage' component={AdminAddPage} options={{title:'    Add Match Details    '}} />
            <stack.Screen name='ChangesPage' component={AdminChangePage} options={{title:'Change Match Details'}} />
            <stack.Screen name='DeletePage' component={AdminDeletePage} options={{title:' Delete Match Details '}} />
        </stack.Navigator>     
    )
}

export default AdminRoute;