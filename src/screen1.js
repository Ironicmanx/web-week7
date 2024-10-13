import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useReducer, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-web';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now().toString(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function Screen1() {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer to manage state in functional component instead of useState because it's more complex and better for performance

  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Save" onPress={addTodo} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTodo(item.id)}>
            <Text style={styles.item}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});