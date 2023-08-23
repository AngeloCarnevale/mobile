import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import New from "../screens/New";


const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: () => <FontAwesome5 size={25} color="gray" name="home" />,
                    tabBarLabel: 'Início'
                }} />

            <Tab.Screen name="New"
                component={New}
                options={{
                    tabBarIcon: () => <FontAwesome5 size={25} name="plus" color="gray" />,
                    tabBarLabel: "Novo"
                }} />
        </Tab.Navigator>
    )
}