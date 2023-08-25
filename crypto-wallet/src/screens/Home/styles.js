import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 20,
        justifyContent: 'space-between',
        backgroundColor: 'red',
        gap: 10
    },
    notifyButton: {
        justifyContent: 'right'
    },
    user: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        gap: 10
    },
    money: {
        padding: 10,
        borderBottomWidth: 0.9,
        display: 'flex',
        justifyContent: 'center',
        borderBottomColor: '#c0c0c0',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: 'gray'
    }
})