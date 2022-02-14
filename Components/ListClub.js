import React from 'react';
import { View, FlatList } from 'react-native';
import clubData from '../Helpers/clubs';
import Club from './Club';

class ListClub extends React.Component {
    render() {
        return (
           <View>
               <FlatList
                    data={clubData}
                    renderItem={(item) => item.id.toString()}
                    keyExtractor={({item}) => <Club club={item}/>}
                />
           </View> 
        )
    }
}

export default ListClub