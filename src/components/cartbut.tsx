import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { COLORS } from "../constants/Colors"
import { useState } from "react"
type CartbutProps = {
  setPage: (page: string) => void   // simple function type
}
export default function Cartbut({setPage}: CartbutProps) {
    const [count,setcount]=useState(1)
    return (
        <View style={butstyle.container}>
            <Text style={butstyle.text}>
                Quantity
            </Text>
            <View style={butstyle.qutContainer}>
                <TouchableOpacity onPress={()=> setcount(count>1?count-1:count)}>
                    <Image source={require("../../assets/icons8-minus-96.png")} style={butstyle.buttimsize} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={butstyle.counter}>
                    {count}
                </Text>
                <TouchableOpacity onPress={()=> setcount(count+1)}>
                    <Image source={require("../../assets/icons8-plus-math-96.png")} style={butstyle.buttimsize} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={butstyle.options}>
                <TouchableOpacity onPress={()=> alert("Product added to cart")} style={butstyle.butdesign}>
                    <Text style={butstyle.optiontext}>
                        Add to Cart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setPage("CheckOut")} style={butstyle.butdesign2}>
                    <Text style={butstyle.optiontext2}>
                        Buy Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export const butstyle = StyleSheet.create({
    container: { flex: 1 },
    text: { fontSize: 25, fontWeight: "bold" },
    qutContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor:COLORS.gray,
        borderRadius: 7, alignSelf: "flex-start", height: 40,paddingHorizontal:10 ,gap:15,marginTop:10,minHeight:50},
    buttimsize: { height: 30 ,width:30},
    counter:{fontSize: 25},
    options:{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",marginTop:"auto",gap:20},
    butdesign:{borderWidth:1,borderRadius:7,borderColor:COLORS.primary,paddingVertical:10,flex:1,alignItems:"center"},
    butdesign2:{borderRadius:7,backgroundColor:COLORS.primary,paddingVertical:10,flex:1,alignItems:"center"},
    optiontext:{fontSize:20,color:COLORS.primary},
    optiontext2:{fontSize:20,color:COLORS.white}
})