import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import Character from "../screens/Character"


export function InsideLayout() {

    const InsideStack = createStackNavigator()

    return (
        <InsideStack.Navigator >
            <InsideStack.Screen name="home" component={Home} options={{ headerTintColor: '#fff', 
            headerStyle: { backgroundColor: 'gray'}, title: 'Rick and Morty', headerTitleAlign: 'center'}} />
            <InsideStack.Screen name="character" component={Character} />
        </InsideStack.Navigator>
    )
}