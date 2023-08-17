import {
    View,
    FlatList,
    Text,
} from 'react-native';
import { ItemContainer } from './styles';
import { loadPosts } from '../../data';
import { useState } from 'react';


export default function Page1() {

    const Item = ({ title, body, cover }) => (
        <ItemContainer>
            
            {/* <Image source={{uri: cover}} style={{width: 100, height: 100 }} /> */}
            <Text>{title}</Text>
            <Text>{body}</Text>
        </ItemContainer>
    );

    const [posts, setPost] = useState([])

    // loadPosts().then(data => setPost(data))
    return (
        <View>
            {/* <FlatList
                data={posts}
                renderItem={({ item }) => <Item title={item.title} body={item.body} cover={item.cover} />}
                keyExtractor={item => item.id}
            /> */}
            <Text>Hello</Text>
        </View>
    )
}