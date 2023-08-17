import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { ButtonLogin, Container, Input, InputContainer } from "./style"
import { useState } from "react"
import { FIREBASE_AUTH } from '../../FireBaseConfig'


export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    return (
        <Container>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
            <InputContainer>
                <Input placeholder="Username" value={username} onChangeText={(username) => setUsername(username)} autoCapitalize="none"/>
                <Input keyboardType="numeric" value={password} onChangeText={(password) => setPassword(password)} placeholder="Password" secureTextEntry={true} />
            </InputContainer>
            <View>
                <ButtonLogin onPress={() => {

                    if (username == "angelo" && password == "1234") {
                        navigation.navigate("home", { username, password })
                        setUsername('')
                        setPassword('')
                    }
                }}>
                    <Text style={{ fontWeight: "bold" }}>Login</Text>
                </ButtonLogin>
            </View>
        </Container>
    )
}