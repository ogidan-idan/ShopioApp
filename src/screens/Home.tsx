import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.searchRow}>
                <TextInput style={style.searchInput} placeholder="Search for products....." />
                <Image source={require("../../assets/icons8-search-30.png")} style={style.searchIcon} />
                <TouchableOpacity>
                    <Image source={require("../../assets/icons8-bell-24.png")} style={style.bellIcon} />
                </TouchableOpacity>
            </View>

            <ImageBackground
                source={require("../../assets/images.png")}
                style={style.banner}
                imageStyle={style.bannerImage}
            >
                <Text style={style.bannerText}>Summer Sale</Text>
                <Text style={style.bannerTitle}>50% OFF</Text>
                <Text style={style.bannerText}>On Selected Items</Text>

                <TouchableOpacity style={style.shopButton}>
                    <Text style={style.shopButtonText}>Shop Now</Text>
                </TouchableOpacity>

                <Image
                    source={require("../../assets/ChatGPT Image Apr 29, 2026, 04_23_37 PM.png")}
                    style={style.bannerProduct}
                    resizeMode="contain"
                />
            </ImageBackground>

            <View style={style.textlabelview}>
                <Text style={style.textlabel}>Categories</Text>
                <TouchableOpacity>
                    <Text style={style.seeMore}>See more</Text>
                </TouchableOpacity>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.categoryScroll}>
                    <TouchableOpacity style={style.bottonicon}>
                        <Image source={require("../../assets/icons8-ipad-80.png")} style={style.icon} resizeMode="center" />
                        <Text> Electronics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bottonicon}>
                        <Image source={require("../../assets/icons8-sports-96.png")} style={style.icon} resizeMode="center" />
                        <Text> Sport</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bottonicon}>
                        <Image source={require("../../assets/icons8-women`s-shoe-96.png")} style={style.icon} resizeMode="center" />
                        <Text> Shoes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bottonicon}>
                        <Image source={require("../../assets/icons8-long-formal-dress-96.png")} style={style.icon} resizeMode="center" />
                        <Text> Fashion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bottonicon}>
                        <Image source={require("../../assets/icons8-clothes-94.png")} style={style.icon} resizeMode="center" />
                        <Text> Clothes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.bottonicon}>
                        <Image source={require("../../assets/icons8-embroidery-96.png")} style={style.icon} resizeMode="center" />
                        <Text> Embroidery</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={style.textlabelview}>
                <Text style={style.textlabel}>Popular product</Text>
                <TouchableOpacity>
                    <Text style={style.seeMore}>See all</Text>
                </TouchableOpacity>
            </View>

            <View style={style.productContainer}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.productScroll}>
                    <View style={style.productview}>
                        <TouchableOpacity style={style.bottonicon}>
                            <Image source={require("../../assets/Copilot_20260430_115826.png")} style={style.product} resizeMode="contain" />
                            <Text>Wireless Headphones</Text>
                            <Text style={style.price}>$6.77</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.bottonicon}>
                            <Image source={require("../../assets/Copilot_20260430_115847.png")} style={style.product} resizeMode="contain" />
                            <Text>Wireless Headphones</Text>
                            <Text style={style.price}>$6.77</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.bottonicon}>
                            <Image source={require("../../assets/Copilot_20260430_115856.png")} style={style.product} resizeMode="contain" />
                            <Text>Wireless Headphones</Text>
                            <Text style={style.price}>$6.77</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.bottonicon}>
                            <Image source={require("../../assets/Copilot_20260430_115906.png")} style={style.product} resizeMode="contain" />
                            <Text>Wireless Headphones</Text>
                            <Text style={style.price}>$6.77</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export const style = StyleSheet.create({
    container: { flex: 1, padding: 20, paddingTop: 20, gap: 20 },
    searchRow: { position: "relative", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    searchInput: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, width: "80%", paddingLeft: 40 },
    searchIcon: { width: 20, height: 20, position: "absolute", left: 10 },
    bellIcon: { width: 30, height: 30 },
    banner: { height: 200, padding: 20 },
    bannerImage: { borderRadius: 10 },
    bannerText: { color: "#fff" },
    bannerTitle: { color: "#fff", fontSize: 30, fontWeight: "bold" },
    shopButton: { backgroundColor: "#fff", padding: 10, borderRadius: 10, alignSelf: "flex-start", marginTop: 20 },
    shopButtonText: { textAlign: "center", fontWeight: "bold" },
    bannerProduct: { height: 200, width: 200, position: "absolute", right: 20, bottom: 0 },
    textlabelview: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "" },
    textlabel: { fontSize: 22, fontWeight: "bold" },
    seeMore: { fontSize: 20 },
    categoryScroll: { gap: 20, backgroundColor: "" },
    bottonicon: { alignItems: "center", justifyContent: "center", gap: 5 },
    icon: { width: 50, height: 50 },
    productContainer: { flex:0.7, backgroundColor: "" ,padding:20},
    productScroll: { gap: 20, backgroundColor: "" },
    productview: { flexDirection: "row", justifyContent: "space-between",  flexWrap: "wrap" },
    product: { width: 150, height: 150 },
    price: { fontWeight: "bold", color: "#333" }
})
