import { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import {styles} from './style'
import { Todo } from '../../components/Todo';
import { EmptyList } from '../../components/EmptyList';

export function Home(){
  const [inputFocus, setFocusInput] = useState<boolean>(false);
  const [toDos, setToDo] = useState<string[]>([])
  const [countTodos, setCountTodos] = useState<number>(0);
  const [inputTodo, setInputTodo] = useState('')

  function handleAddTodo(){
    if(toDos.includes(inputTodo)){
      return Alert.alert("ToDo existente", "Esta toDo já foi adicionada")
    }

    setToDo(prevState => [...prevState, inputTodo]);
    setInputTodo('')
    setCountTodos(countTodos + 1)
  }

  function handleRemoveTodo(todo: string){
    Alert.alert("Remover", `Deseja remover a ToDo ${todo}?`, [
      {
        text: 'Sim',
        onPress: () => setToDo(prevState => prevState.filter(todo => todo !== todo))
      }
    ])
  }

  return(
    <View>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../../assets/todo.png')}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={inputFocus ? styles.inputFocus : styles.input }
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6b6b6b"
          onFocus={() => setFocusInput(true)}
          onChangeText={setInputTodo}
          value={inputTodo}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Image
            style={styles.logoAdd}
            source={require('../../../assets/add.png')}
          />
        </TouchableOpacity>        
      </View>
      <View style={styles.progress}>
        <View style={styles.created}>
          <Text style={styles.textCreated}>Criadas</Text>
          <View style={styles.count}>
            <Text style={styles.textCount}>{countTodos}</Text>
          </View>

        </View>
        <View style={styles.completed}>
          <Text style={styles.textCompleted}>Concluídas</Text>
          <View style={styles.count}>
            <Text style={styles.textCount}>0</Text>
          </View>
        </View>        
      </View>
      <FlatList
        data={toDos}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Todo
            key={item}
            todo={item}
            onRemove={() => handleRemoveTodo(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList/>
        )}
      />
    </View>
  )  
}