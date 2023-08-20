import { View, Text, TouchableOpacity } from "react-native";
import React, {useContext} from "react";
import { FIREBASE_AUTH } from "../../FireBaseConfig";
import { AuthContext } from "../../contexts/auth";


export default function Home () {

    const {setUser} = useContext(AuthContext)

    return(
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=> setUser(null)}>
                <Text>Logout</Text>
            </TouchableOpacity> 
        </View>
    )
}