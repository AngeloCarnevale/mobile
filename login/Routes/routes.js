import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import Home from "../screens/Home"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/auth"
import SignUp from "../screens/SignUp"


const Stack = createStackNavigator()

const InsideStack = createStackNavigator()

const LoginStack = createStackNavigator()


function LoginLayout() {
    return (
        <LoginStack.Navigator initialRouteName="login">
            <LoginStack.Screen name="login" component={Login} options={{ headerShown: false }} />
            <LoginStack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
        </LoginStack.Navigator>
    )
}

function InsideLayout() {
    return (
        <InsideStack.Navigator >
            <InsideStack.Screen name="home" component={Home} />
        </InsideStack.Navigator>
    )
}

export default function Routes() {

    const {user, setUser} = useContext(AuthContext)
    /*
    const [user, setUser] 
    */
    console.log(user)

    return (
        <Stack.Navigator >
            {user ? <Stack.Screen name="loggedRoutes" options={{ headerShown: false }} component={InsideLayout} /> 
            : <Stack.Screen name="loginRoutes" options={{ headerShown: false }} component={LoginLayout} />}
        </Stack.Navigator>
    )
}