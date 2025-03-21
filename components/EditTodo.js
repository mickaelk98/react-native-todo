import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useState } from "react";
import { colors, radius, sizes, spaces } from '../constants';
import { Undo2, Save } from "lucide-react-native";

export default function EditTodo({ todo, toogleTodo, editTodo }) {
    const [input, setInput] = useState("")

    return <View style={styles.container}>
        <TouchableOpacity style={styles.todo}>
            <TextInput defaultValue={todo.task} onChangeText={setInput} style={styles.input} />
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => toogleTodo(todo.id, "value")} >
                    <Undo2 size={sizes.XL} color={colors.BLUE} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => editTodo(todo.id, input)}>
                    <Save size={sizes.XL} color={colors.GREEN} />
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
    input: {
        width: "75%",
        borderWidth: spaces.XS,
        paddingHorizontal: spaces.S,
        borderColor: colors.GREY,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: spaces.L,
    }
})