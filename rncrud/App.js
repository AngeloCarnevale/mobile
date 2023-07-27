import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserForm from "./src/views/UserForm";
import UserList from "./src/views/UserList";

const Stack = createNativeStackNavigator()

export default function App () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList">
                <Stack.Screen name="UserList" component={UserList}></Stack.Screen>
                <Stack.Screen name="UserForm" component={UserForm}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
