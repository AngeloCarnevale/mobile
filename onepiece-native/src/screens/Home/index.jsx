import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from './styles'
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";


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
        <>
            <View style={styles.menu}>
                <Text>Rick and Morty</Text>
                <TouchableOpacity onPress={() => setUser(null)}>
                    <View>
                        <Icon name="logout" size={20} color="black" />
                    </View>

                </TouchableOpacity>
            </View>

            <ScrollView>
                <FlatList
                    data={data["results"]}
                    renderItem={({ item }) => <Item name={item.name} image={item.image} />}
                    keyExtractor={item => item.id}
                    onEndReached={getCharacters}
                    onEndReachedThreshold={0.1}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={getCharacters}
                            colors={['green']}
                        />}
                />
                {page == 1 ?
                    <TouchableOpacity onPress={() => setPage(page + 1)}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                    :
                    <>
                        <TouchableOpacity onPress={() => setPage(page - 1)}>
                            <Text>Prev</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setPage(page + 1)}>
                            <Text>Next</Text>
                        </TouchableOpacity>
                    </>
                }

            </ScrollView>

        </>

    )
}