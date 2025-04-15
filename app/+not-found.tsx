import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link, Stack } from 'expo-router';

const NotFoundScreen = () => {
   
    return (
        <>
            <Stack.Screen
                options={{ title: '404 - Not Found', headerShown: false }}
            />
            <View style={styles.container}>
                <Text style={styles.title}>404 - Not Found</Text>
                <Text style={styles.message}>
                    The page you are looking for does not exist.
                </Text>
                <Link href="/(tabs)" style={{ marginTop: 20 }}>
                    Go to Home
                </Link>
            </View>    
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
        color: '#666',
    },
});

export default NotFoundScreen;