import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const INIT_VALUE = {
    toDoList: '',
  }

  const [inputText, setInputText] = useState(INIT_VALUE)
  const [inputStorage, setInputStorage] = useState<string[]>([])

  const [count, setCount] = useState(0)

  const increment = () => setCount((state) => state + 1)
  const decrement = () => setCount((state) => state - 1)

  const handleChange = (input: string) => {
    setInputText(input as any)
  } 

  const handleSubmit = () => {
    setInputStorage((val):any => [...val, inputText])
  }

 
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder="To do list"
        value={inputText.toDoList}
        onChangeText={handleChange}
        />
        <Button title="Add" onPress={handleSubmit}/>
      </View>
      <View style={styles.listContainer}>
           {inputStorage.map((val:string, i: number) => {
             return (
              <View key={i}>
                <Text>
                  {val}
                </Text>
              </View>
             )
           })}
      </View>
      <View style={{flex: 2}}>
        <Text>
           {count}
        </Text>
        <Button title="increment"onPress={increment} />
        <Button title="decrement" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 20
  },
  textInput: {
    borderWidth: 2,
    padding: 4,
    width: '80%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomColor: 'red',
    borderBottomWidth: 2
  },
  listContainer: {
   flex: 3
  }
});
