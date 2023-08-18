import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import Home from "../screens/Home"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { FIREBASE_AUTH } from "../FireBaseConfig"
import SignUp from "../screens/SignUp"


const Stack = createStackNavigator()

const InsideStack = createStackNavigator()

function InsideLayout() {

    return (
        <InsideStack.Navigator >
            <InsideStack.Screen name="home" component={Home} />

        </InsideStack.Navigator>
    )
}

export default function Routes() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user)
        })
    }, [])


    return (
        <Stack.Navigator initialRouteName="login">
            {user ?
                <Stack.Screen name="loggedRoutes" options={{ headerShown: false }} component={InsideLayout} />
                : <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />}
            <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}