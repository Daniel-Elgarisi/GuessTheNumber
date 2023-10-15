import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary400,
        textAlign: 'center',
        borderColor: Colors.primary400,
        borderRadius: 10,
        borderWidth: 2,
        marginTop: 100,
        padding: 12,

    }
});