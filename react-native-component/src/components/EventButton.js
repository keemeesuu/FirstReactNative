import React from 'react';
import { Pressable, Text } from 'react-native';

const EventButton = () => {
    const _onPress = () => console.log('Press\n');
    const _onPressIn = () => console.log('Press In\n');
    const _onPressOut = () => console.log('Press Out\n');
    const _onLongPress = () => console.log('Long Press\n');

    return (
        <Pressable
            style={{
                backgroundColor: '#f1c40f',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={_onPress}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}
            onLongPress={_onLongPress}
            delayLongPress={3000}
        >
            <Text style={{ color: 'white', fontSize: 24}}>Press</Text>
        </Pressable>
    )
}

export default EventButton;