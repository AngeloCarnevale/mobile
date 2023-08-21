import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from './styles'
import { AuthContext } from "../../contexts/auth";
import axios from "axios";


export default function Home() {
    const { setUser } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    function getCharacters() {
        setLoading(true)
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => setData(response.data))
        setLoading(false)
    }

    useEffect(() => {
        getCharacters()
    }, [page])


    const Item = ({ name, image }) => {
        return (
            <View style={styles.item} >
                <Text>
                    {name}
                </Text>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
        )
    }

    return (


        // <Text>Home</Text>
        // <TouchableOpacity onPress={() => setUser(null)}>
        //     <Text>Logout</Text>
        // </TouchableOpacity>
        <>
            <ScrollView>
                <FlatList
                    data={data["results"]}
                    renderItem={({ item }) => <Item name={item.name} image={item.image} />}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={getCharacters}
                            colors={['green']}
                        />
                    }/>

                <TouchableOpacity onPress={()=> setPage(page + 1)}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </ScrollView>

        </>

    )
}