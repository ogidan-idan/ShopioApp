import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { COLORS } from "../constants/Colors"
import { useState } from "react"
import Home from "./Home"

export default function ProductDetails() {
     const [page, setPage] =useState("ProductDetails")
        if (page=="Home"){
            return<Home/>
        }
        return (
            <SafeAreaView style={style.setPage}>
                <View style={style.headerRow}>
                    <TouchableOpacity onPress={()=> setPage("Home") }>
                    <Image source={require("../../assets/icons8-less-than-50.png")} style={style.goback} />
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=> alert("unavialable at the moment")}>
                    <Image source={require("../../assets/icons8-favorite-100.png")} style={style.goback} />
                </TouchableOpacity>
            </View>

            <View style={style.imageWrapper}>
                <Image source={require("../../assets/Copilot_20260430_115856.png")} style={style.productImage} resizeMode="contain" />
            </View>

            <View style={style.detailsWrapper}>
                <Text style={style.productTitle}>Wireless Headphone</Text>

                <View style={style.ratingRow}>
                    <Image source={require("../../assets/icons8-star-96 (1).png")} style={style.star} />
                    <Image source={require("../../assets/icons8-star-96 (1).png")} style={style.star} />
                    <Image source={require("../../assets/icons8-star-96 (1).png")} style={style.star} />
                    <Image source={require("../../assets/icons8-star-96 (1).png")} style={style.star} />
                    <Image source={require("../../assets/icons8-star-96 (1).png")} style={style.star} />
                    <Text style={style.ratingValue}>0.0</Text>
                    <Text>(0 Reviews)</Text>
                </View>

                <Text style={style.price}>$49.99</Text>
                <Text style={style.sectionLabel}>Description</Text>
                <Text style={style.description}>
                    Premium headphones delivering crystal‑clear sound, deep bass, and all‑day comfort.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export const style = StyleSheet.create({
    setPage: { flex: 1, padding: 20 },

    headerRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10, flex: 1 },
    goback: { width: 30, height: 30 },

    imageWrapper: { alignSelf: "center", height: 300, marginTop: 20 },
    productImage: { flex: 1 },

    detailsWrapper: { flex: 15, marginTop: 20 },
    productTitle: { fontSize: 30, fontWeight: "bold", marginBottom: 10 },

    ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
    star: { width: 20, height: 20, marginRight: 5 },
    ratingValue: { marginLeft: 20, marginRight: 5 },

    price: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
    sectionLabel: { fontSize: 20, fontWeight: "bold", marginTop: 15, marginBottom: 5 },
    description: { fontSize: 16, lineHeight: 22,textAlign:"justify" }
})
