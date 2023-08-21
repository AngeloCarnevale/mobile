import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"


export function InsideLayout() {

    const InsideStack = createStackNavigator()

    return (
        <InsideStack.Navigator >
            <InsideStack.Screen name="home" component={Home} options={{ headerShown: false }} />
        </InsideStack.Navigator>
    )
}