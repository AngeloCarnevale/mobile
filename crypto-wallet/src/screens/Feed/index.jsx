import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

export default function Feed() {
  const [price, setPrice] = useState('')
  const symbol = 'LTCBTC'

  async function getData() {

    const response = await fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`, {
      headers: {
        'X-Api-Key': 'sJZdZL5T+/gbllmqnCA19w==E2Kzo9ymdMr8vQMF'
      }
    })

    const priceResponse = await response.json()
    console.log(priceResponse)

    setPrice(priceResponse.price)
  }


  return (
    <View style={styles.container}>
      <Text>{price}</Text>
      <Button title='send' onPress={getData} />
    </View>
  )
}
//sJZdZL5T+/gbllmqnCA19w==E2Kzo9ymdMr8vQMF