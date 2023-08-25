import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import New from "../screens/New";
import Quote from "../screens/Quote";


const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="home"
                component={Home}
                options={{
                    tabBarIcon: () => <FontAwesome5 size={25} color="gray" name="home" />,
                    tabBarLabel: 'Início'
                }} />

            <Tab.Screen name="View"
                component={Quote}
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="briefcase-eye-outline" size={25} color="black" />,
                    tabBarLabel: "See quote"
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