import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    container: {
        padding: 20
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    errorText: {
        marginVertical: 10,
        color: 'red',
    },
    input:{
        height: 50,
        width:'80%',
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius:20,
        padding: 10,
        color: '#2c3e50'
    },
    buttonContainer:{
        width:'80%',
        borderRadius:20,
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});