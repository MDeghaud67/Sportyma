import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import clubData from '../Helpers/clubs';
import Club from './Club';

class ListClub extends React.Component {
    render() {
        return (
           <View style={styles.main_container}>
               <FlatList
               
                    data={clubData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Club club={item}/>}
                />
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 50
    },
    title_text: {
      
    }
  })

export default ListClub