import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LoginContainer, InputContainer, ButtonContainer, Input, Container } from './styles'
import { useState } from 'react';


export default function Login({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>

            <LoginContainer>
                <Text>Login</Text>
                <InputContainer>
                    <Input
                        onChangeText={setUsername}
                        value={username}
                        placeholder='Username'
                    />
                    <Input
                        value={password}
                        onChangeText={setPassword}
                        keyboardType='numeric'
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                </InputContainer>
                <ButtonContainer>
                    <TouchableOpacity
                        style={{ "background-color": "#fcdd6c", "padding": 10, "borderRadius": 10 }}
                        onPress={() => {
                            if (username == "senai" && password == "123456") {
                                navigation.navigate("Home", { username, password })
                            }
                        }}
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </ButtonContainer>
            </LoginContainer>
        </Container>

    )
}