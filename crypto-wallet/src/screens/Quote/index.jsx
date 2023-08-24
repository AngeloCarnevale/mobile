import { View, Text, Button } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import {MaterialIcons } from '@expo/vector-icons'
import React, {useState, useEffect} from 'react'
import { styles } from './styles'

export default function Quote() {
    const [price, setPrice] = useState('')
    const [currency, setCurrency] = useState('')
    const apiKey = 'sJZdZL5T+/gbllmqnCA19w==E2Kzo9ymdMr8vQMF'
  
    useEffect(() => {
      getCurrency()
    }, [])
    
    async function getData(symbol) {
  
      const response = await fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
  
      const priceResponse = await response.json()
      console.log(priceResponse)
  
      setPrice(priceResponse.price)
    }

    async function getCurrency() {

        const response = await fetch("https://api.api-ninjas.com/v1/cryptosymbols?", {
            headers: {
                'X-Api-Key': apiKey
            }
        })
        const currencyResponse = await response.json()
        setCurrency(currencyResponse.symbols)
    }

    return (
        <View style={styles.container}>
            <Text>Quote</Text>

            <Button title='send' onPress={getCurrency}/>

            <SelectDropdown 
            data={currency}
            buttonStyle={{backgroundColor: '#e0e0e0', borderRadius: 15, width: 200}}
            search={true}
            renderDropdownIcon={()=> <MaterialIcons name='keyboard-arrow-down' size={26}/> }
            searchPlaceHolder='Currency'
            searchPlaceHolderColor='#c0c0c0'
            defaultButtonText='SCurrency'
            onSelect={(selectedItem) => {
                setPrice(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
            />
        </View>
    )
}