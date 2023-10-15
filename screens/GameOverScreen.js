import { Text, View, Image, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer} >
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/image/winner.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.summaryText} >
                Your phone needed
                <Text style={styles.highlight} > {roundsNumber} </Text>
                rounds to guess the number
                <Text style={styles.highlight} > {userNumber} </Text>:
            </Text>
            <PrimaryButton onPress={onStartNewGame}>
                Start New Game
            </PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 20,
        marginTop: -90,
        alignItems: 'center',
        justifyContent: 'center'
    },

    summaryText: {
        fontSize: 14,
        marginBottom: 16
    },

    highlight: {
        color: Colors.primary600,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    imageContainer: {
        width: 320,
        height: 320,
        borderRadius: 160,
        borderWidth: 3,
        borderColor: Colors.primary600,
        overflow: 'hidden',
        margin: 36
    },

    image: {
        width: '100%',
        height: '100%',
    }
});