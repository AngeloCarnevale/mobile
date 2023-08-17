import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        gap: 20,
        backgroundColor: "#fffafa"
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        height: 100,   
        marginTop: 20,
        width: '100%'
    },
    loginContainer: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 30,
        borderRadius: 15,
        alignItems: 'center',
        width: 300,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        height: 30,
        paddingLeft: 5
    },
    button: {
        backgroundColor: '#fcdd6c',
        fontWeight: 'bold',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        
    }
})



