import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

	const [count, setCount] = useState(0)

	return (
		<View style={styles.container}>
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	button: {
		marginTop: 20,
		borderRadius: 10,
		width: 70,
		height: 50,
		borderStyle: 'none',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonView: {
		display: 'flex',
		flexDirection: 'row',
		gap: 30,
		fontSize: 40,
		fontWeight: 'bold'
	}
});
