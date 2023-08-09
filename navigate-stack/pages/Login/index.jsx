import { View, Text, Button, TextInput } from 'react-native';
import styles from './styles.js';
import { useState } from 'react';


export default function Login({ navigation }) {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Login</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setN1}
                    keyboardType='numeric'
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={setN2}
                    keyboardType='numeric'
                    />
                <Button
                    title='Home'
                    onPress={() => {
                        if (parseInt(n1) + parseInt(n2) != 5 ) {
                            navigation.navigate("Login")
                        }
                        else {
                            navigation.navigate("Home", {n1, n2})
                        }
                    }}
                />
            </View>

        </View>
    )
}