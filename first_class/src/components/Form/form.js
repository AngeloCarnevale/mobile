import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'
import ResultImc from "../ResultImc/resultImc";
import { TouchableOpacity } from "react-native-web";

export default function Form() {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha a altura e o peso")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((peso / (altura * altura)).toFixed(2))
    }
    function validationImc() {
        if (peso != null && altura != null) {
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            return
        }
        else {
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
        }
    }
    return (
        <View >
            <View style={styles.container}>
                <Text style={styles.label}>Altura</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                ></TextInput>

                <Text style={styles.label}>Peso</Text>

                <TextInput
                    style={styles.input}
                    value={peso}
                    onChangeText={setPeso}
                    placeholder="Ex. 75.56"
                    keyboardType="numeric">
                </TextInput>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.button}>{textButton}</Text>
                    </TouchableOpacity>
                </View>




                <ResultImc messageResultImc={messageImc}
                    resultImc={imc} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        color: "red",
        padding: 15,
        borderRadius: 15,
    },
    buttonContainer: {
        marginTop: 50,
    },
    input: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        width: '90%',
        backgroundColor: "#e0e0e0",
        borderRadius: 30,
    },
    button: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center',
        width: "90%",
        backgroundColor: "#FF0043",
        paddingBottom: 14,
        paddingTop: 14,
        textAlign: "center",
        color: "white",
    },
    label: {
        padding: 5,
    }
});