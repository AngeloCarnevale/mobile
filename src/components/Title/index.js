import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function Title (){
    return (
        <View style={styles.container} > 
            <Text style={styles.text}>ONEBITHEALTH</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#FF0043",
        padding: 10,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
    },
    container: {
        backgroundColor: "#e0e0e0",
        width: "100%",
        paddingTop: 100,
        paddingBottom: 20,
    }
});
