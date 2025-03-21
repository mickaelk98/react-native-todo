import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, radius, sizes, spaces } from '../constants';
import { PencilLine, Trash2 } from "lucide-react-native";

export default function DsiplayTodo({ todo, toogleTodo, deleteTodo }) {
    return <View style={styles.container}>
        <TouchableOpacity style={styles.todo} onPress={() => toogleTodo(todo.id, "status")
        }>
            <Text style={[styles.txt, { textDecorationLine: todo.done ? "line-through" : "none" }]}>{todo.task}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => toogleTodo(todo.id, "value")} >
                    <PencilLine size={sizes.XL} color={colors.BLUE} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(todo.id)} >
                    <Trash2 size={sizes.XL} color={colors.RED} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        backgroundColor: colors.WHITE,
        padding: spaces.M,
        borderRadius: radius.M,
        marginBottom: spaces.M,
        height: spaces.XXL * 0.8,
    },
    todo: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',

    },
    txt: {
        flex: 1,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: spaces.L,
    }
})