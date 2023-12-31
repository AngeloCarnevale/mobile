import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        gap: 20,
        backgroundColor: "#fff"
    },
    loginContainer: {
        padding: 40,
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        height: 100,   
        marginTop: 20,
        width: '100%'
    },
    buttonContainer: {
        width: '100%',
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    signUp: {
        color: '#fcdd6c'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
        height: 30,
        paddingLeft: 5
    },
    textButton: {
        backgroundColor: '#fcdd6c',
        fontWeight: 'bold',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        textAlign: 'center'
    }
})



