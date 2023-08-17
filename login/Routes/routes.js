import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import Home from "../screens/Home"


const Stack = createStackNavigator()

export default function Routes() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
    )
}