import React from "react";
import { FlatList, View, Text } from "react-native";
import users from '../data/users'
import { ListItem } from "react-native-elements";




export default function UserList(props) {

    function getUserItem({ item: user }) {
        return (
            <ListItem
                
            />
            
            
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}