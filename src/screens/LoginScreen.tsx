import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/Colors";
import { Page } from "../constants/GlobalStyles";
import Home from "./Main"
import SignUp from "./SignUp";
import ForgotPassword from "./Forgotten";
export default function App() {
  const [hidePassword, setHidePassword] = useState(true)
  const [page, setPage]= useState("Login")
  const [email, setEmail]=useState("")
  const [password,setpassword]=useState("")
  const ValidEmail=""
  const ValidPass=""
  function gotologin(){
    if (email==ValidEmail && password==ValidPass)
      setPage("Home")
    else 
      alert("input valid credentials")
  }
  if (page== "Login"){
  return (
    <SafeAreaView style={Page.startpage}>
      <View style={Page.flex}>
        <View style={style.imageView}>
          <Image
            source={require("../../assets/Copilot_20260428_134851.png")}
            style={style.imagesize}
            resizeMode="contain"
          />
          <Text style={style.imageTitle}>Shopio</Text>
          <Text>Welcome back!</Text>
        </View>
        <View style={style.container}>
          <View style={style.inputcon}>
            <Text>Email or phone</Text>
            <TextInput
              style={style.textInput}
              placeholder="Enter email or phone" inputMode="email"
              value={email}
              onChangeText={setEmail}
            />
            <Text style={{ marginTop: 15 }}>Password</Text>
            <View style={{ justifyContent: "center" }}>
              <TextInput
                style={style.textInput}
                placeholder="Enter password"
                inputMode="text"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={setpassword}
              />
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}
                style={style.eyePos}>
                <Image source={
                  hidePassword
                    ? require("../../assets/icons8-eye-30.png")
                    : require("../../assets/icons8-blind-30.png")} style={style.eyeSize} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=> setPage("Forgotten")} style={style.forgotBut}>
              <Text style={style.forgotText}>Forgotten password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={gotologin}
            style={style.loginBut}
          >
            <Text style={style.loginText}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 30
          }}>
            <View style={style.dashline} />
            <Text style={style.dashText}>or continue with</Text>
            <View style={style.dashline} />
          </View>
          <View style={style.socialCon}>
            <TouchableOpacity onPress={()=> alert("Google Login not available at the moment")} style={style.socialBut}>
              <Image
                source={require("../../assets/icons8-google-48.png")}
                style={style.socialImage}
              />
              <Text>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> alert("Facebook Login not available at the moment")} style={style.socialBut}>
              <Image
                source={require("../../assets/icons8-facebook-logo-48.png")}
                style={style.socialImage}
              />
              <Text>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.signinView}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={()=> setPage("SignUp")}>
            <Text style={style.signinText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
  }
  else if (page== "Home"){
    return<Home/>
  }
  else if (page== "Forgotten"){
    return<ForgotPassword/>
  }
  else if (page== "SignUp"){
    return<SignUp/>
  }
}
const style = StyleSheet.create({
  imageView: { alignItems: "center", marginTop: 40, flex: 1 },
  imagesize: { width: 120, height: 120 },
  imageTitle: { fontSize: 30, fontWeight: "bold" },
  container: { flex:3 },
  inputcon: { marginTop: 40, position: "relative" },
  textInput: { borderWidth: 1, borderColor: COLORS.borderGray, borderRadius: 10, paddingHorizontal: 20, height: 55 },
  eyePos: { position: "absolute", right: 10 },
  eyeSize: {  height: 20,width:20 },
  forgotBut: { alignSelf: "flex-end", marginTop: 10 },
  forgotText: { color: COLORS.primary },
  loginBut: { backgroundColor: COLORS.primary, borderRadius: 10, paddingVertical: 15, marginTop: 30 },
  loginText: { color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" },
  dashline: { flex: 1, height: 1, backgroundColor: COLORS.gray },
  dashText: { marginHorizontal: 10 },
  socialCon: { flexDirection: "row", gap: 30, alignItems: "center", justifyContent: "center" },
  socialBut: { flexDirection: "row", borderRadius: 10, borderWidth: 1, borderColor: COLORS.borderGray, padding: 10, width: "40%", justifyContent: "center" },
  socialImage: { width: 20, height: 20, marginRight: 8 },
  signinView: { flexDirection: "row", justifyContent: "center", marginTop: "auto" },
  signinText: { color: COLORS.primary, fontWeight: "bold" }
})