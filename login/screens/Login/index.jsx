import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./style"
import React, { useState } from "react";

import { FIREBASE_AUTH } from '../../FireBaseConfig'


export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(username) => setUsername(username)} autoCapitalize="none" />
                    <TextInput style={styles.input} keyboardType="numeric" value={password} onChangeText={(password) => setPassword(password)} placeholder="Password" secureTextEntry={true} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => {

                        if (username == "angelo" && password == "1234") {
                            navigation.navigate("home", { username, password })
                            setUsername('')
                            setPassword('')
                        }
                    }}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}