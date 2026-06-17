import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import BottomTabs from "../components/Button";


// Import your screen components
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notification";
import NotAvil from "../screens/NotAvil";
import ProductDetails from "./ProductDetails";
import ProductDetails1 from "./ProductDetails copy"
import ProductDetails2 from "./ProductDetails copy 2"
import ProductDetails3 from "./ProductDetails copy 3"


export default function MainApp() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderScreen = () => {
    switch (activeTab) {
      case "Home":
        return <Home goTo={setActiveTab} />;
      case "Categories":
        return <Categories goTo={setActiveTab} />;
      case "Cart":
        return <Cart />;
      case "Profile":
        return <Profile />;
      case "Notifications":
        return <Notifications  goTo={setActiveTab}/>;
      case "NotAvil":
        return <NotAvil />;
      case "Product1":
        return <ProductDetails/>;
      case "Product2":
        return <ProductDetails1/>;
      case "Product3":
        return <ProductDetails2 />;
      case "Product4":
        return <ProductDetails3 />;
      default:
        return <Home goTo={setActiveTab} />;
    }
  };

  return (
    <SafeAreaView style={style.setPage}>
      <View style={style.content}>{renderScreen()}</View>
      {["Cart", "Profile", "Home", "Categories"].includes(activeTab) ? (
        <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      ) : null}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    setPage: { flex: 1, backgroundColor: "#fff" },
    content: { flex: 1 },
});
