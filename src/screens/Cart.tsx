import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function Cart() {
    return (
        <SafeAreaView style={style.setPage}>
            <View style={style.headerRow}>
                <TouchableOpacity>
                    <Image source={require("../../assets/icons8-less-than-50.png")} style={style.goback} />
                </TouchableOpacity>
                <Text style={style.headerTitle}>My Cart</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.cartList}>
                <View style={style.cartItem}>
                    <Image source={require("../../assets/Copilot_20260430_115826.png")} style={style.itemImage} resizeMode="contain" />
                    <View style={style.itemDetails}>
                        <Text style={style.itemTitle}>Wireless Headphones</Text>
                        <Text style={style.itemPrice}>$6.77</Text>
                        <View style={style.quantityRow}>
                            <TouchableOpacity style={style.qtyButton}><Text>-</Text></TouchableOpacity>
                            <Text style={style.qtyValue}>1</Text>
                            <TouchableOpacity style={style.qtyButton}><Text>+</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={style.cartItem}>
                    <Image source={require("../../assets/Copilot_20260430_115847.png")} style={style.itemImage} resizeMode="contain" />
                    <View style={style.itemDetails}>
                        <Text style={style.itemTitle}>Smart Watch</Text>
                        <Text style={style.itemPrice}>$59.99</Text>
                        <View style={style.quantityRow}>
                            <TouchableOpacity style={style.qtyButton}><Text>-</Text></TouchableOpacity>
                            <Text style={style.qtyValue}>2</Text>
                            <TouchableOpacity style={style.qtyButton}><Text>+</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={style.footer}>
                <View style={style.totalRow}>
                    <Text style={style.totalLabel}>Total:</Text>
                    <Text style={style.totalValue}>$66.76</Text>
                </View>
                <TouchableOpacity style={style.checkoutButton}>
                    <Text style={style.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export const style = StyleSheet.create({
    setPage: { flex: 1, padding: 20, backgroundColor: "#fff" },

    headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
    goback: { width: 30, height: 30, marginRight: 20 },
    headerTitle: { fontSize: 25, fontWeight: "bold" },

    cartList: { gap: 20 },
    cartItem: { flexDirection: "row", backgroundColor: "#f9f9f9", borderRadius: 10, padding: 15, alignItems: "center" },
    itemImage: { width: 80, height: 80, marginRight: 15 },
    itemDetails: { flex: 1 },
    itemTitle: { fontSize: 18, fontWeight: "bold" },
    itemPrice: { fontSize: 16, color: "#333", marginVertical: 5 },

    quantityRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
    qtyButton: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 10, paddingVertical: 2 },
    qtyValue: { marginHorizontal: 10, fontSize: 16 },

    footer: { marginTop: "auto", paddingVertical: 20 },
    totalRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
    totalLabel: { fontSize: 20, fontWeight: "bold" },
    totalValue: { fontSize: 20, fontWeight: "bold", color: "#333" },

    checkoutButton: { backgroundColor: "#007bff", padding: 15, borderRadius: 10 },
    checkoutText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold" }
})
