import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useState } from "react";
import { COLORS } from "../constants/Colors";
import { RadioButton } from "react-native-paper";

type CheckOutProps = {
  goTo: (tab: string) => void;
};

export default function Checkout({ goTo }: CheckOutProps) {
  const [selectedMethod, setSelectedMethod] = useState("card"); // default selection

  return (
    <SafeAreaView style={style.setPage}>
      {/* Header */}
      <View style={style.headerRow}>
        <TouchableOpacity onPress={() => goTo("Cart")}>
          <Image
            source={require("../../assets/icons8-less-than-50.png")}
            style={style.goback}
          />
        </TouchableOpacity>
        <Text style={style.headerTitle}>Checkout</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollContent}
      >
        {/* Delivery Address */}
        <Text style={style.sectionTitle}>Delivery Address</Text>
        <View style={style.card}>
          <Text style={style.cardText}>John Doe</Text>
          <Text style={style.cardText}>123 Main Street</Text>
          <Text style={style.cardText}>Kaduna, Nigeria</Text>
          <TouchableOpacity style={style.editButton}>
            <Text style={style.editText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Payment Method */}
        <Text style={style.sectionTitle}>Payment Method</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setSelectedMethod(newValue)}
          value={selectedMethod}
        >
          <TouchableOpacity style={style.paymentCard} onPress={() => setSelectedMethod("card")}>
            <Image source={require("../../assets/icons8-credit-card-64.png")} style={style.paymentIcon} resizeMode="contain" />
            <Text style={style.paymentText}>Credit/Debit Card</Text>
            <View style={style.radioButton}>
            <RadioButton value="card"/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.paymentCard} onPress={() => setSelectedMethod("paypal")}>
            <Image source={require("../../assets/icons8-paypal-96.png")} style={style.paymentIcon} resizeMode="contain" />
            <Text style={style.paymentText}>PayPal</Text>
            <View style={style.radioButton}>
            <RadioButton value="paypal" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.paymentCard} onPress={() => setSelectedMethod("cash")}>
            <Image source={require("../../assets/icons8-cash-96.png")} style={style.paymentIcon} resizeMode="contain" />
            <Text style={style.paymentText}>Cash on Delivery</Text>
            <View style={style.radioButton}>
            <RadioButton value="cash" />
            </View>
          </TouchableOpacity>
        </RadioButton.Group>

        {/* Order Summary */}
        <Text style={style.sectionTitle}>Order Summary</Text>
        <View style={style.card}>
          <View style={style.summaryRow}>
            <Text style={style.summaryLabel}>Subtotal</Text>
            <Text style={style.summaryValue}>$189.97</Text>
          </View>
          <View style={style.summaryRow}>
            <Text style={style.summaryLabel}>Shipping</Text>
            <Text style={style.summaryValue}>$5.00</Text>
          </View>
          <View style={style.summaryRow}>
            <Text style={style.summaryLabel}>Total</Text>
            <Text style={style.totalValue}>$194.97</Text>
          </View>
        </View>

        {/* Place Order Button */}
        <TouchableOpacity
          onPress={() => goTo("Confirmation")}
          style={style.confirmButton}
        >
          <Text style={style.confirmText}>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  setPage: { flex: 1, padding: 20, backgroundColor: "#fff" },

  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  goback: { width: 30, height: 30, marginRight: 20 },
  headerTitle: { fontSize: 25, fontWeight: "bold" },

  scrollContent: { gap: 20 },

  sectionTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },

  card: { backgroundColor: "#f9f9f9", borderRadius: 10, padding: 15 },
  cardText: { fontSize: 16, marginBottom: 5 },

  editButton: { alignSelf: "flex-end", marginTop: 10 },
  editText: { color: COLORS.primary, fontWeight: "bold" },

  paymentCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#f1f1f1", borderRadius: 10, padding: 15, marginBottom: 10 },
  paymentIcon: { width: 30, height: 30, marginHorizontal: 10 },
  paymentText: { fontSize: 16, fontWeight: "bold" },
  radioButton:{marginLeft:"auto"},

  summaryRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  summaryLabel: { fontSize: 16, color: "#555" },
  summaryValue: { fontSize: 16, fontWeight: "bold" },
  totalValue: { fontSize: 18, fontWeight: "bold", color: "#000" },

  confirmButton: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 10, marginTop: 20 },
  confirmText: { color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold" }
});
