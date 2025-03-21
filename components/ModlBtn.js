import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, sizes, spaces, radius } from '../constants';
import { Trash2, Undo2 } from 'lucide-react-native';

export default function ModalBtn({ children, action, setIsVisible, deleteAllTodos }) {

    const handlePress = () => {
        if (action === "delete") {
            deleteAllTodos()
        }
        setIsVisible(false)
    }

    return <TouchableOpacity onPress={() => handlePress()} style={styles.container}>
        <Text style={[styles.msg, { color: action === "delete" ? colors.RED : colors.GREEN }]}>{children}</Text>
        {action === "delete" ? <Trash2 size={sizes.M} color={colors.RED} /> : <Undo2 size={sizes.M} color={colors.GREEN} />}
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
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
        fontSize: sizes.M,
    }
})