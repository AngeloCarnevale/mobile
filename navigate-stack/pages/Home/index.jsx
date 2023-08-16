import { View, Text, Button } from 'react-native';
import { HomeContainer } from './styles';
import { ButtonContainer } from './styles';

export default function Home({ route, navigation }) {

    return (
        <HomeContainer>
            <Text>Bem vindo {route.params.username}</Text>

            <ButtonContainer>
                <Button
                    title='Login'
                    onPress={() => navigation.navigate("Login")}
                />
                <Button
                    title='Next page'
                    onPress={() => navigation.navigate("page1")}
                />
            </ButtonContainer>

        </HomeContainer>

    )
}