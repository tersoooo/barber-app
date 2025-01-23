import { View, Text, TouchableOpacity } from 'react-native';
import React from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {

    const router = useRouter();

    return (
        <View className="flex-1 bg-black justify-between px-4 py-6">
            <Text className="text-white py-4">Welcome to Barber App!</Text>

            <TouchableOpacity
                onPress={() => router.push('/screens/BookingScreen')}
                className="bg-[#333] py-4 items-center justify-center rounded"
            >
                <Text className="text-white text-center text-lg font-bold">BOOKING SCREEN</Text>
            </TouchableOpacity>
        </View>
    )
}
