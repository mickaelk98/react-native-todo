import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import TodosFilter from './components/TodosFilter';
import TodoItem from './components/TodoItem';
import MyModal from './components/MyModal';
import { useState } from 'react';
import { colors, radius, sizes, spaces } from './constants';
import { Trash2 } from 'lucide-react-native';


export default function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [inputValue, setInputValue] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const addTodo = () => {

    if (inputValue === "") return;

    const todo = {
      id: Date.now(),
      task: inputValue,
      done: false,
      edit: false,
    }

    setTodos((prev) => [...prev, todo])
    setInputValue("")
  }

  const toogleTodo = (todoId, mode) => {
    let result;
    if (mode === "status") {
      result = todos.map(todo => todo.id === todoId ? { ...todo, done: !todo.done } : todo)
    } else {
      result = todos.map(todo => todo.id === todoId ? { ...todo, edit: !todo.edit } : todo)
    }
    setTodos(result)
  }

  const editTodo = (todoId, newTask) => {
    const result = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask, edit: false } : todo)
    setTodos(result)
  }

  const deleteTodo = (todoId) => {
    const result = todos.filter(todo => todo.id !== todoId)
    setTodos(result)
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  const filterTodos = () => {
    if (filter === "done") {
      return todos.filter(todo => todo.done)
    } else if (filter === "active") {
      return todos.filter(todo => !todo.done)
    } else {
      return todos
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma todo list</Text>
      <View style={styles.addTodoContainer}>
        <TextInput defaultValue={inputValue} onChangeText={setInputValue} style={styles.input} placeholder="Ajouter une tache" />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.txtAdd}>Ajouter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todosContainer}>
        {todos.length > 0 ? <FlatList data={filterTodos()} showsVerticalScrollIndicator={false} keyExtractor={item => item.id} renderItem={({ item }) => <TodoItem todo={item} toogleTodo={toogleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />} /> : <Text style={styles.txt}>Aucune tache a faire pur le moment</Text>}
      </View>
      {todos.length > 0 && <TodosFilter setFilter={setFilter} filter={filter} />}
      {todos.length > 0 && <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.msgContainer}>
        <Text style={styles.msg}>Supprimer toutes les taches</Text>
        <Trash2 size={sizes.M} color={colors.RED} />
      </TouchableOpacity>}
      <MyModal isVisible={isVisible} deleteAllTodos={deleteAllTodos} setIsVisible={setIsVisible} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    alignItems: 'center',
    paddingTop: spaces.XXL,
  },
  title: {
    fontSize: sizes.XL,
    fontWeight: 'bold',
    marginBottom: spaces.M,
  },
  addTodoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: radius.M,
    width: "90%",
    backgroundColor: colors.WHITE,
    marginBottom: spaces.L,
    height: 50
  },
  input: {
    width: "75%",
    paddingHorizontal: spaces.M,
  },
  txt: {
    fontSize: sizes.M,
    textAlign: 'center',
  },
  button: {
    padding: spaces.S,
    height: 50,
    backgroundColor: colors.BLUE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: radius.M,
    borderBottomRightRadius: radius.M,
  },
  txtAdd: {
    color: colors.WHITE,
  },
  todosContainer: {
    width: "90%",
    maxHeight: 500,
  },
  msgContainer: {
    flexDirection: 'row',
    gap: spaces.M,
    backgroundColor: colors.WHITE,
    borderRadius: radius.M,
    padding: spaces.M,
    marginTop: spaces.L,
    height: spaces.XXL * 0.8,
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: sizes.XL,
  },
  msg: {
    color: colors.RED,
    fontSize: sizes.M,
  }
});
