import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";

const Stack = createStackNavigator()

export default function Routers() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="page1" component={Page1} />
        </Stack.Navigator>
    )
}