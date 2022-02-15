import React from 'react';
import { View, Text } from 'react-native';

class Player extends React.Component {
    render() {
        const player = this.props.player
        return (
            <View>
                <Text>{player.firstName}</Text>
                <Text>{player.lastName}</Text>
            </View>
        )
    }
}

export default Player