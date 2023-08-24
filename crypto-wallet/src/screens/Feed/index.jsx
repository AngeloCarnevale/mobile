import { View, Text, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>

        <FontAwesome5 name="user-circle" size={45} />

        <View>
          <Text>Ângelo</Text>
          <Text>Good morning</Text>
        </View>

        <View style={styles.notifyButton}>
          <Button  title='icon' />
        </View>

      </View>

    </SafeAreaView>
  )
}
//sJZdZL5T+/gbllmqnCA19w==E2Kzo9ymdMr8vQMF