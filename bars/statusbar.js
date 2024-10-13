import { View, Text, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function StatusBarComponent() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View>
                <Text>Current Time</Text>
                <Text>{currentTime}</Text>
            </View>
        </>
    );
}