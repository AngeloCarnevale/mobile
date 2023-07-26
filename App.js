import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: "center",
    flex: 1,
    width: "100%",
  },

});
