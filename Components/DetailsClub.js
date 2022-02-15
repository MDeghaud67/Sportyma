import React from 'react';
import { View } from 'react-native';
import clubData from '../Helpers/clubs';
import playerData from '../Helpers/players'
import Player from './Player';

class DetailsClub extends React.Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../assets/Barcelone-LogoPNG1.png')}
                />
                <FlatList
                    data={playerData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Player player={item}/>}
                />
            </View>
        )
    }
}

export default DetailsClub