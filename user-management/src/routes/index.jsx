import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
// import DrawerRoutes from "./drawer.routes";


export default function Routes () {

    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}