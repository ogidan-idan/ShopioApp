import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { COLORS } from "../constants/Colors"
import { Page } from "../constants/GlobalStyles"
import Login from "./LoginScreen"
import Home from "./Main"

export default function SignUp() {
    const [hidePassword1, setHidePassword1] = useState(true)
    const [hidePassword2, setHidePassword2] = useState(true)
    const [page, setPage] = useState("SignUp")
    const [name, setName]=useState("")
    const [email, setemail]=useState("")
    const [pass1, setpass1]=useState("")
    const [pass2, setpass2]=useState("")
    function gotohome(){
        if (email.trim()!="" && name.trim()!="" && pass1.trim()!="" && pass2==pass1){

            setPage("Home")
        }
        else {

            alert("Error")
        }
    }
    if (page == "SignUp") {

        return (
            <SafeAreaView style={Page.startpage}>
                <View style={style.container}>
                    <TouchableOpacity onPress={()=>setPage("Login")}>
                        <Image source={require("../../assets/icons8-less-than-50.png")} style={style.goback} />
                    </TouchableOpacity>
                    <Text style={style.title}>
                        Create Account
                    </Text>
                    <Text style={style.subtitle}>
                        Sign up and get started
                    </Text>
                    <Text style={style.text}>
                        Full Name
                    </Text>
                    <TextInput style={style.input} inputMode="text" placeholder="Enter your full name"
                    value={name}
                    onChangeText={setName} />
                    <Text style={style.text}>
                        Email
                    </Text>
                    <View>
                        <TextInput style={style.input} inputMode="email" placeholder="Enter your email" 
                        value={email} onChangeText={setemail}/>
                        <Text style={style.text}>
                            Password
                        </Text>
                    </View>
                    <View style={style.eyeview}>
                        <TextInput style={style.input} inputMode="text" placeholder="Enter your password"
                            secureTextEntry={hidePassword1} value={pass1} onChangeText={setpass1}/>
                        <TouchableOpacity onPress={() => setHidePassword1(!hidePassword1)}
                            style={style.eye1}>
                            <Image source={
                                hidePassword1
                                    ? require("../../assets/icons8-eye-30.png")
                                    : require("../../assets/icons8-blind-30.png")
                            } style={style.eyeIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <Text style={style.text}>
                        Confirm Password
                    </Text>
                    <View style={style.eyeview}>
                        <TextInput style={style.input} inputMode="text" placeholder="Confirm your password"
                            secureTextEntry={hidePassword2} value={pass2} onChangeText={setpass2}/>
                        <TouchableOpacity onPress={() => setHidePassword2(!hidePassword2)}
                            style={style.eye2}>
                            <Image source={
                                hidePassword2
                                    ? require("../../assets/icons8-eye-30.png")
                                    : require("../../assets/icons8-blind-30.png")
                            } style={style.eyeIcon} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={gotohome} style={style.signupButton}>
                        <Text style={style.signupText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.loginContainer}>
                    <Text>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => setPage("Login")}>
                        <Text style={style.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
    else if (page == "Login") {
        return <Login />
    }
    else if (page == "Home") {
        return <Home />
    }

}

export const style = StyleSheet.create({
    container: { marginTop: 20, flex: 9 },
    goback: { width: 30, height: 30 },
    title: { paddingTop: 10, fontSize: 30, fontWeight: "bold" },
    subtitle: { fontSize: 15 },
    text: { marginTop: 15, fontSize: 16, fontWeight: "500" },
    input: { borderWidth: 1, borderColor: COLORS.gray, borderRadius: 8, padding: 10, marginTop: 5, width: "100%" },
    eye1: { position: "absolute", right: 10 },
    eye2: { position: "absolute", right: 10 },
    eyeIcon: { width: 20, height: 20 },
    signupButton: { backgroundColor: COLORS.primary, borderRadius: 8, padding: 15, marginTop: 20 },
    signupText: { color: COLORS.white, textAlign: "center", fontSize: 20, fontWeight: "bold" },
    loginContainer: { flex: 1, flexDirection: "row", justifyContent: "center", gap: 5 },
    loginText: { color: COLORS.primary },
    eyeview: { flexDirection: "row", alignItems: "center" }
})
