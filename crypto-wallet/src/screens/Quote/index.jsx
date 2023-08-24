import { View, Text, Button } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { styles } from './styles'

export default function Quote() {
    const [price, setPrice] = useState('')
    const [currency, setCurrency] = useState('')
    const [symbol, setSymbol] = useState('')
    const apiKey = 'sJZdZL5T+/gbllmqnCA19w==E2Kzo9ymdMr8vQMF'

    useEffect(() => {
        getSymbols()
    }, [])

    async function getPrice(symbol) {

        const response = await fetch(`https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        })

        const priceResponse = await response.json()

        setPrice(priceResponse.price)
    }

    async function getSymbols() {

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
            <SelectDropdown
                data={currency}
                buttonStyle={{ backgroundColor: '#e0e0e0', borderRadius: 15, width: 200 }}
                search={true}
                renderDropdownIcon={() => <MaterialIcons name='keyboard-arrow-down' size={26} />}
                searchPlaceHolder='Currency'
                searchPlaceHolderColor='#c0c0c0'
                defaultButtonText='Currency'
                onSelect={(selectedItem) => {
                    getPrice(selectedItem)
                }}
            />

            <>
            {price? <Text>U${Number(price).toFixed(2)}</Text> : <></>}
            </>
        </View>
    )
}