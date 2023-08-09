import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import Routers from "./routers";


export default function App() {
    
    return (
        <NavigationContainer>
            <Routers/>
        </NavigationContainer>
    )
}
