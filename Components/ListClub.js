import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import clubData from '../Helpers/clubs';
import Club from './Club';
import { getClubs } from '../API/FootDataApi'

class ListClub extends React.Component {
    constructor(props){
        super(props)
        this.state = { clubs: [] }
        //this._clubs = []
    }

    loadClub() {
        getClubs().then(data => {
            this.setState({ clubs: data.results })
            //this._clubs = data.results
        })
    }

    render() {
        return (
           <View style={styles.main_container}>
               <FlatList 
                    data={this.state.clubs}
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