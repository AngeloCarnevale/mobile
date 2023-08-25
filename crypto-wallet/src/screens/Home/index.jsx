import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home() {


	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.top}>
				<View style={styles.user}>
					<FontAwesome5 name="user-circle" size={45} />

					<View>
						<Text>Ângelo</Text>
						<Text>Good morning</Text>
					</View>
				</View>
				<View style={styles.notifyButton}>
					<TouchableOpacity>icon</TouchableOpacity>
				</View>


			</View>
			<View style={styles.money}>
				<Text>Total balance</Text>
				<Text>$42,295.00 USD</Text>
			</View>

			<View style={styles.buttons}>
				<TouchableOpacity style={styles.button}>
					<FontAwesome5 name='money'/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button}>
					<Text>Add Money</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button}>
					<Text>More</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
//sJZdZL5T+/gbllmqnCA19w==E2Kzo9ymdMr8vQMF