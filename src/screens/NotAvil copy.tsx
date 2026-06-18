import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Page } from "../constants/GlobalStyles"
import { COLORS } from "../constants/Colors"
import { useState } from "react"
import Categories from "./Categories"
import MainApp from "./Main"
type NotAvailProp={
    goTo:(tab:string)=>void
}
export default function Notifications({goTo}:NotAvailProp) {
    const [page, setPage] = useState("Notifications")
    if (page == "Categories") {
        return <Categories goTo={MainApp}/>
    }
    return (
        <SafeAreaView style={Page.startpage}>
            <View style={styles.topheader}>
                <TouchableOpacity onPress={() => goTo("Categories")}>
                    <Image source={require("../../assets/icons8-less-than-50.png")} style={styles.goback} />
                </TouchableOpacity>
                <Text style={styles.toptext}>
                    Product
                </Text>
            </View>
            <View style={styles.productView}>
                <Text style={styles.productText}> Product not available for now </Text>
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