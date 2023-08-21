import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fffafa"
    },

    item: {
        backgroundColor: 'gray',
        margin: 10,
        padding: 15,
    },
    image: {
        width:150,
        height:150,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
    
})