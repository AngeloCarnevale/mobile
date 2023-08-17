import { View, Text } from "react-native";


export default function Home ({route, navigation}) {

    return(
        <View>
            <Text>Home</Text>
            <Text>Bem vindo, {route.params.username}</Text>
        </View>
    )
}