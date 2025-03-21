import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors, radius, sizes, spaces } from '../constants';

export default function TodosFilter({ filter, setFilter }) {
    return <View style={styles.container}>
        <TouchableOpacity style={styles.filter} onPress={() => setFilter("all")}>
            <Text style={[styles.txt, { color: filter === "all" ? colors.BLUE : colors.GREY }]}>Toutes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={() => setFilter("active")}>
            <Text style={[styles.txt, { color: filter === "active" ? colors.BLUE : colors.GREY }]}>En cours</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={() => setFilter("done")}>
            <Text style={[styles.txt, { color: filter === "done" ? colors.BLUE : colors.GREY }]}>Faites</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        padding: spaces.M,
        borderRadius: radius.M,
        marginTop: spaces.XL,
        height: spaces.XXL * 0.8,
    }, txt: {
        fontSize: sizes.M,
    }

})