import { Stack } from "expo-router";
import { View, StyleSheet, Text } from 'react-native';
import Header from "@/components/Header";
import "../global.css";


export default function RootLayout() {
  return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
          <Header />
          <Stack
              screenOptions={{
                  headerShown: false,
                  contentStyle: { backgroundColor: "black" },
              }}
          />
      </View>
  );
}
