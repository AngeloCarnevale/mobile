import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        minWidth: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: 30
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 5,
    },
    inputContent: {
        backgroundColor: '#fff',
        padding: 10,
        width: 150,
        borderRadius: 5
    },
})