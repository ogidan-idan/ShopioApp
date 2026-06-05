import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function OrderConfirmation() {
    return (
        <SafeAreaView style={style.setPage}>
            {/* Success Icon */}
            <View style={style.iconWrapper}>
                <Image 
                    source={require("../../assets/icons8-correct-48.png")} 
                    style={style.successIcon} 
                    resizeMode="contain" 
                />
            </View>

            {/* Confirmation Text */}
            <Text style={style.title}>Order Placed Successfully!</Text>
            <Text style={style.subtitle}>Thank you for shopping with us.</Text>

            {/* Order Details */}
            <View style={style.detailsCard}>
                <Text style={style.detailText}>Order ID: #ORD123456789</Text>
                <Text style={style.detailText}>Date: May 20, 2026</Text>
                <Text style={style.detailText}>Total: $194.97</Text>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={style.continueButton}>
                <Text style={style.continueText}>Continue Shopping</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export const style = StyleSheet.create({
    setPage: { flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" },

    iconWrapper: { marginBottom: 20 },
    successIcon: { width: 150, height: 150,},

    title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
    subtitle: { fontSize: 16, color: "#555", marginBottom: 20, textAlign: "center" },

    detailsCard: { backgroundColor: "#f9f9f9", borderRadius: 10, padding: 15, width: "100%", marginBottom: 30,alignItems:"flex-start" },
    detailText: { fontSize: 16, marginBottom: 5, textAlign: "center" },

    continueButton: { backgroundColor: "#007bff", padding: 15, borderRadius: 10, width: "100%" },
    continueText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold" }
})
