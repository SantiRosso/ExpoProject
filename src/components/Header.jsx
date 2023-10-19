import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header({ setTime, currentTime, setCurrentTime }) {
    
    function handlePress(index) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60)
    }
    
    return (
        <View style={styles.view}>
            {
                options.map((item, index) => (
                    <TouchableOpacity key={index} style={[styles.itmeStyle, currentTime !== index && {borderColor: "transparent"}]} onPress={() => handlePress(index)}>
                    <Text style={styles.itemText}>{item}</Text>
                   </TouchableOpacity> 
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    itmeStyle: {
        alignItems: "center",
        width: "33%",
        borderWidth: 3,
        padding: 5,
        borderColor: "white",
        borderRadius: 10,
        marginVertical: 20
    },
    view: {
        flexDirection: "row",
    },
    itemText: {
        fontWeight: "bold"
    }
})