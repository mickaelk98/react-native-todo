import { View, Text, Modal, StyleSheet } from 'react-native';
import { colors, radius, sizes, spaces } from '../constants';
import ModalBtn from './ModlBtn';


export default function MyModal({ isVisible, setIsVisible, deleteAllTodos }) {
    return <Modal visible={isVisible} animationType="slide" transparent={true}>
        <View style={styles.container}>
            <Text style={styles.txt}>Voulez vous vraiment supprimer toutes les taches ?</Text>
            <ModalBtn deleteAllTodos={deleteAllTodos} setIsVisible={setIsVisible} action="delete">Oui</ModalBtn>
            <ModalBtn deleteAllTodos={deleteAllTodos} setIsVisible={setIsVisible} action="cancel">Non</ModalBtn>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: spaces.XL,
        backgroundColor: colors.BG,
        alignItems: 'center',
    },
    txt: {
        fontSize: sizes.M,
        fontWeight: 'bold',
    }
})