import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(0);

    const handleAddition = () => {
        const num1 = parseFloat(number1) || 0;
        const num2 = parseFloat(number2) || 0;
        setResult(num1 + num2);
    };

    const handleSubtraction = () => {
        const num1 = parseFloat(number1) || 0;
        const num2 = parseFloat(number2) || 0;
        setResult(num1 - num2);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Result: {result}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={number1}
                    onChangeText={setNumber1}
                    placeholder="first number"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={number2}
                    onChangeText={setNumber2}
                    placeholder="second number"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.operationButton}
                    onPress={handleAddition}
                >
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.operationButton}
                    onPress={handleSubtraction}
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    input: {
        width: '45%',
        backgroundColor: 'rgba(0,255,200,1)',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
    },
    operationButton: {
        backgroundColor: 'rgba(0,255,200,1)',
        padding: 15,
        borderRadius: 5,
        width: '20%',
        alignItems: 'center',
    },
});
