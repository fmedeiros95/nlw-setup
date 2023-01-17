import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#09090A"
    }
})