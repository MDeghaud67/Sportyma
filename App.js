import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListClub from './Components/ListClub';

export default function App() {
  return (
    <ListClub/>
    /*<View style={styles.container}>
      <Text>Bienvenue dans l'application Sportyma</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
