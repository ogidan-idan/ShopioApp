import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import BottomTabs from "../components/Button";

// Import your screen components
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

export default function MainApp() {
    const [activeTab, setActiveTab] = useState("Home");

    const renderScreen = () => {
        switch (activeTab) {
            case "Home":
                return <Home />;
            case "Categories":
                return <Categories goHome={() => setActiveTab("Home")} />;
            case "Cart":
                return <Cart />;
            case "Profile":
                return <Profile />;
            default:
                return <Home />;
        }
    };

    return (
        <SafeAreaView style={style.setPage}>
            <View style={style.content}>
                {renderScreen()}
            </View>
            <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    setPage: { flex: 1, backgroundColor: "#fff" },
    content: { flex: 1 },
});
