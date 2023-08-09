import { View, Text, Button } from 'react-native';
import styles from './styles.js';


export default function Home({ route, navigation }) {
    const n1 = parseInt(route.params?.n1);
    const n2 = Number(route.params?.n2);
    const total = n1+n2
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Home</Text>
            <Text>{total}</Text>
            <Button
                title='Login'
                onPress={() => navigation.navigate("Login")}
            />

        </View>
    )
}