import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Finally</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput style={styles.textInput} placeholder="To do list"/>
        <Button title="Add To Do"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  text: {
    textAlign: 'center',
    margin: 5,
    borderWidth: 5,
    borderColor: 'red',
    padding: 5,
    borderRadius: 10
  },
  textInput: {
    borderWidth: 3,
    padding: 4,
    width: '60%'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
