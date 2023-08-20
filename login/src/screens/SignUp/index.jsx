import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH } from "../../FireBaseConfig";


export default function SignUp({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = FIREBASE_AUTH;
    const [loading, setLoading] = useState(false);

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            alert("Cadastro feito com sucesso")
            navigation.navigate("login")

        } catch (e) {
            alert("Erro ao efetuar cadastro", e)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Sign Up</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={(email) => setEmail(email)} autoCapitalize="none" />
                    <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={signUp}>
                        <Text style={styles.textButton}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("login")}>
                        <Text style={styles.signUp}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}