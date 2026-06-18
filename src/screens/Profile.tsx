import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useState } from "react";

type ProfileProps={
    goTo:(tab:string)=> void
}

export default function Profile({goTo}:ProfileProps) {
   
    return (
        <SafeAreaView style={style.setPage}>
            {/* Header */}
            <View style={style.headerRow}>
                <Text style={style.headerTitle}>Profile</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.scrollContent}>
                {/* User Info */}
                <View style={style.userCard}>
                    <Image source={require("../../assets/icons8-human-48.png")} style={style.userIcon} resizeMode="contain" />
                    <View>
                        <Text style={style.userName}>John Doe</Text>
                        <Text style={style.userEmail}>jdm.doe@example.com</Text>
                    </View>
                </View>

                {/* Menu Options */}
                <TouchableOpacity onPress={()=>alert("Not available at the moment")} style={style.menuItem}>
                    <Text style={style.menuText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert("Not available at the moment")} style={style.menuItem}>
                    <Text style={style.menuText}>My Addresses</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert("Not available at the moment")} style={style.menuItem}>
                    <Text style={style.menuText}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> goTo("Notifications")} style={style.menuItem}>
                    <Text style={style.menuText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert("Not available at the moment")} style={style.menuItem}>
                    <Text style={style.menuText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert("Not available at the moment")} style={style.menuItem}>
                    <Text style={style.menuText}>Help & Support</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> goTo("Login")} style={style.menuItem}>
                    <Text style={[style.menuText, { color: "red" }]}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export const style = StyleSheet.create({
    setPage: { flex: 1, padding: 20, backgroundColor: "#fff" },

    headerRow: { marginBottom: 20 },
    headerTitle: { fontSize: 25, fontWeight: "bold" },

    scrollContent: { gap: 20 },

    userCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#f9f9f9", borderRadius: 10, padding: 15 },
    userIcon: { width: 60, height: 60, marginRight: 15 },
    userName: { fontSize: 20, fontWeight: "bold" },
    userEmail: { fontSize: 16, color: "#555" },

    menuItem: { backgroundColor: "#f1f1f1", borderRadius: 10, padding: 15 },
    menuText: { fontSize: 18, fontWeight: "bold" }
})
