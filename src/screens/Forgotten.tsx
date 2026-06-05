import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Loginscreen from "./LoginScreen"
import { COLORS } from "../constants/Colors";
export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [page, setPage] = useState("")

    const handleReset = () => {
        if (email.trim() != "")
            alert("Reset link sent to: " + email);
        else
            alert("Error")
    };
    if (page == "Login") {
        return <Loginscreen />
    }
    return (
        <SafeAreaView style={style.setPage}>
            {/* Header */}
            <Text style={style.header}>Forgot Password</Text>

            {/* Lock Icon */}
            <Image
                source={require("../../assets/Copilot_20260506_152121.png")}
                style={style.lockIcon}
                resizeMode="contain"
            />

            {/* Title */}
            <Text style={style.title}>Reset Your Password</Text>
            <Text style={style.subtitle}>
                Enter your email address and we’ll send you a link to reset your password.
            </Text>

            {/* Input Field */}
            <View style={style.inputWrapper}>
                <Image
                    source={require("../../assets/icons8-email-50.png")}
                    style={style.inputIcon}
                    resizeMode="contain"
                />
                <TextInput
                    style={style.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            {/* Reset Button */}
            <TouchableOpacity onPress={handleReset} style={style.resetButton} >
                <Text style={style.resetText}>Send Reset Link</Text>
            </TouchableOpacity>

            {/* Back to Login */}
            <TouchableOpacity onPress={() => setPage("Login")} style={style.backButton}>
                <Text style={style.backText}>Back to Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

}

const style = StyleSheet.create({
    setPage: { flex: 1, backgroundColor: "#fff", padding: 20, },

    header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },

    lockIcon: { width: 250, height: 250, alignSelf: "center", marginBottom: 20 },

    title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
    subtitle: { fontSize: 14, color: "#555", textAlign: "center", marginBottom: 20 },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    inputIcon: { width: 20, height: 20, marginRight: 10 },
    input: { flex: 1, height: 40 },

    resetButton: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 10, marginBottom: 15 },
    resetText: { color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "bold" },

    backButton: { alignSelf: "center" },
    backText: { color: COLORS.primary, fontSize: 14, fontWeight: "bold" },
});
