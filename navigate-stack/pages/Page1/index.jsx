import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    StatusBar,
} from 'react-native';
import { Container, ItemContainer } from './styles';
import { posts } from '../../data'
import { loadPosts } from '../../data';
import { useState, useEffect } from 'react';


export default function Page1() {

    const Item = ({ title, body, cover }) => (
        <ItemContainer>
            {console.log(cover)}
            <Image source={{uri: cover}} alt="Imagem do post" />
            <Text>{title}</Text>
            <Text>{body}</Text>
        </ItemContainer>
    );

    const [posts, setPost] = useState([])

    loadPosts().then(data => setPost(data))
    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Item title={item.title} body={item.body} cover={item.cover} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}