import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function New() {
  return (
    <View style={styles.container}>
      <Text>Add your task</Text>

      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Title task"
        placeholderTextColor={"#E0E0E0"}
        />
        <TextInput
        style={styles.inputContent}
        editable
        multiline
        numberOfLines={4}
        placeholder="Content task"
        placeholderTextColor={"#E0E0E0"}
        />
      </View>
    </View>
  )
}