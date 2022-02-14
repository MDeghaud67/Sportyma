import React from 'react';
import { View, Button } from 'react-native';
import clubData from '../Helpers/clubs';

class Club extends React.Component {
    render() {
        const club = this.props.club
        return (
           <View>
               <Button title={club.name} onPress={() => {}}/>
           </View> 
        )
    }
}

export default Club