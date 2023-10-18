import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header({ time }) {
    return (
        <View style={styles.view}>
            {
                options.map((item, index) => (
                   <TouchableOpacity key={index} style={styles.itmeStyle}>
                    <Text>{item}</Text>
                   </TouchableOpacity> 
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    itmeStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
    },
    view: {
        flexDirection: "row",
    }
})