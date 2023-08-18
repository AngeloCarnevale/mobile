import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./style"
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { FIREBASE_AUTH } from '../../FireBaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    // const {setUser} = useContext(AuthContext)

    const signIn = async () => {
        
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            alert("Login feito com sucesso")
            // setUser(email)
        } catch (e) {
            alert("Erro ao efetuar login", e)
        }
        finally {
            setLoading(false)
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Username" value={email} onChangeText={(email) => setEmail(email)} autoCapitalize="none" />
                    <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={signIn}>
                        <Text style={styles.textButton}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("signup")}>
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}