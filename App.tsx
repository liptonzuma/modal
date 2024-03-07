import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={openModal}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto deleniti nemo rerum nulla sint consectetur id esse
              earum officia cupiditate aperiam, laboriosam repellat sapiente
              quam, a quisquam mollitia est quasi.
            </Text>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  width: "100%",
                  marginTop: 24,
                  backgroundColor: "rgba(0,0,0,0.1)",
                },
              ]}
              onPress={() => setOpenModal(false)}
            >
              <Text style={[styles.text, { color: "black" }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpenModal(true)}
      >
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.7,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 12,
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
