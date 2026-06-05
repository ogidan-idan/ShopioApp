import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Page } from "../constants/GlobalStyles"
import { COLORS } from "../constants/Colors"
import { useState } from "react"
import Home from "./Home"
export default function Notifications() {
    const [page, setPage] = useState("Notifications")
    if (page == "Home") {
        return <Home />
    }
    return (
        <SafeAreaView style={Page.startpage}>
            <View style={styles.topheader}>
                <TouchableOpacity onPress={() => setPage("Home")}>
                    <Image source={require("../../assets/icons8-less-than-50.png")} style={styles.goback} />
                </TouchableOpacity>
                <Text style={styles.toptext}>
                    Notifications
                </Text>
            </View>
            <View style={styles.productView}>
                <Text style={styles.productText}> No notifications </Text>
            </View>
        </SafeAreaView>
    )
}
export const styles = StyleSheet.create({
    goback: { width: 30, height: 30 },
    topheader: { flexDirection: "row", alignItems: "center" },
    toptext: { marginLeft: "30%", fontSize: 20, fontWeight: "bold" },
    productView: { alignItems: "center", flex: 1, justifyContent: "center" },
    productText: { color: COLORS.primary }
})