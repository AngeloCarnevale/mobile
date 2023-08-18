import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../FireBaseConfig";


export default function Home () {

    return(
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=> FIREBASE_AUTH.signOut()}>
                <Text>Logout</Text>
            </TouchableOpacity> 
        </View>
    )
}