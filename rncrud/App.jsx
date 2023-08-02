import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/base';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';

export default function App() {

	const Stack = createNativeStackNavigator()

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='UserList'
				screenOptions={screenOptions}

			>

				<Stack.Screen
					name='UserList'
					component={UserList}
					options={({ navigation }) => {
						return {
							title: 'Lista de Usuários',
							headerRight: () => (
								<Button
									onPress={() => navigation.navigate("UserForm")}
									type='clear'
									icon={<Icon name='add' size={25} color='#fff' />}
								/>
							)
						}
					}}
				/>

				<Stack.Screen
					name='UserForm'
					component={UserForm}
					options={{
						title: 'Formulário de Usuário'
					}}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	);
}

const screenOptions = {
	headerStyle: {
		backgroundColor: '#f4511e'
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	}
}
