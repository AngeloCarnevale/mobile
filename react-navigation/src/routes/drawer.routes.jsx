import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";
import Profile from "../screens/Profile";


const Drawer= createDrawerNavigator();

export default function DrawerRoutes(){

    return(
        <Drawer.Navigator screenOptions={{title: false}} initialRouteName="home">
            <Drawer.Screen name="home" component={TabRoutes}
            options={{
                drawerIcon:()=>  <Feather size={25} name="home" color="gray"/>,
                drawerLabel: 'Início'
            }}

            />
            <Drawer.Screen name="profile" component={Profile}
            options={{
                drawerIcon:()=>  <Feather size={25} name="user" color="gray"/>,
                drawerLabel: 'Meu perfil'
            }}
            />
        </Drawer.Navigator>
    )
}