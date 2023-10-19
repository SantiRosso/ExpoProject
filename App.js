import { StyleSheet, Platform, Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View style={styles.androidView}>
        <Text style={styles.text}>Pomodoro</Text>
        <Text>{time}</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          time={time}
          setTime={setTime}
        />
        <Timer time={time} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidView: {
    paddingTop: Platform.OS === "android" && 30,
    paddingHorizontal: 15,
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
