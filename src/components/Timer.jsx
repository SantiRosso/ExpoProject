import {Text, View, StyleSheet} from "react-native";

export default function Timer({time}) {
    return (
        <View style={styles.container}>
            <Text style={styles.time}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
        flex: 0.2,
        justifyContent: "center",
    },
    time: {
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333333"
    }
})