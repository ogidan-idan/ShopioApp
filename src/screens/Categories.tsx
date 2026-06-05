import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";
import { useState } from "react";
import Home from "./Home"
import NotAvil from "./NotAvil copy"

type CategoriesProps = {
  goHome?: () => void; 
};

export default function Categories({ goHome }: CategoriesProps) {
    const[pag, setpag] = useState("Categories")
    if (pag== "Categories"){
    return (
        <SafeAreaView style={style.setPage}>
            <View style={style.headerRow}>
                <TouchableOpacity onPress={goHome}>
                    <Image source={require("../../assets/icons8-less-than-50.png")} style={style.goback} />
                </TouchableOpacity>
                <Text style={style.headerTitle}>Categories</Text>
            </View>

            <View style={style.scrollWrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.scrollContent}>
                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-ipad-80.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Electronics</Text>
                                <Text>129 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-lipstick-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Beauty</Text>
                                <Text>10 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-sports-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Sport</Text>
                                <Text>129 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-women`s-shoe-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Shoes</Text>
                                <Text>11 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-long-formal-dress-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Clothes</Text>
                                <Text>12 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-embroidery-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Embroidery</Text>
                                <Text>29 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-baby-product-64.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Baby Product</Text>
                                <Text>9 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-book-94.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Books</Text>
                                <Text>129 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-chair-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Furnitures</Text>
                                <Text>129 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-dining-room-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Utensil</Text>
                                <Text>129 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-plush-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>Toys</Text>
                                <Text>129 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setpag("NotAvil")} style={style.categ}>
                            <Image source={require("../../assets/icons8-smartphone-96.png")} style={style.catBut} resizeMode="center" />
                            <View style={style.texView}>
                                <Text style={style.catText}>SmartPhone</Text>
                                <Text>129 items</Text>
                            </View>
                            <Image source={require("../../assets/icons8-more-than-96 (1).png")} style={style.catNav} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
    }
    else if (pag== "Home"){
        return<Home/>
    }
    else if (pag== "NotAvil"){
        return<NotAvil/>
    }
}

export const style = StyleSheet.create({
    setPage: { flex: 1, padding: 20},

    headerRow: { flexDirection: "row", alignItems: "center", gap: 70},
    goback: { width: 30, height: 30 },
    headerTitle: { fontSize: 25, fontWeight: "bold" },

    scrollWrapper: { height:"85%",marginTop:20 },
    scrollContent: { paddingHorizontal: 10, flex: 1, gap: 10 },

    categ: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        backgroundColor: COLORS.lightGray, 
        borderRadius: 10, 
        padding: 15, 
        marginBottom: 15 
    },

    catBut: { width: 50, height: 50 },
    texView: { flex: 1, marginLeft: 15 },
    catText: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
    catNav: { width: 25, height: 25, tintColor: COLORS.deepGray }
})
