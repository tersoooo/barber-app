import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";

export default function BookingScreen() {

    const router = useRouter();

    return (
        <View className="flex-1 bg-black justify-between px-4 py-6">
            <Text className="text-white py-4">BOOKING SCREEN</Text>

            <TouchableOpacity
                onPress={() => router.back()}
                className="bg-[#333] py-4 items-center justify-center rounded"
            >
                <Text className="text-white text-center text-lg font-bold">ANASAYFA</Text>
            </TouchableOpacity>
        </View>
    )
}
