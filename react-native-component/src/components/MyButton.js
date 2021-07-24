import React from 'react';
import { Pressable, Text } from 'react-native';

const MyButton = props => {
    console.log(props);
    return (
        <Pressable style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        onPress={() => alert('Click!!')}
        >
            <Text style={{ color: 'white', fontSize: 24}}>
                {props.children || props.title}
            </Text>
        </Pressable>
    )
}

MyButton.defaultProps = {
    title: 'Button',
};

export default MyButton;