import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Stack = createStackNavigator()

export default function Routers() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}