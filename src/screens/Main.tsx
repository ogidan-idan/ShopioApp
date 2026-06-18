import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Text } from "react-native";
import BottomTabs from "../components/Button";


// Import your screen components
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notification";
import NotAvil from "../screens/NotAvil";
import NotAvail from "../screens/NotAvil copy";
import ProductDetails from "./ProductDetails";
import ProductDetails1 from "./ProductDetails copy"
import ProductDetails2 from "./ProductDetails copy 2"
import ProductDetails3 from "./ProductDetails copy 3"
import Login from "./LoginScreen"
import Checkout from "./CheckOut";
import OrderConfirmation from "./Confirmation";


export default function MainApp() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderScreen = () => {
    switch (activeTab) {
      case "Home":
        return <Home goTo={setActiveTab} />;
      case "Categories":
        return <Categories goTo={setActiveTab} />;
      case "Cart":
        return <Cart goTo={setActiveTab} />;
      case "Profile":
        return <Profile goTo={setActiveTab} />;
      case "Notifications":
        return <Notifications goTo={setActiveTab} />;
      case "NotAvil":
        return <NotAvil goTo={setActiveTab} />;
      case "NotAvail":
        return <NotAvail goTo={setActiveTab} />;
      case "Product1":
        return <ProductDetails goTo={setActiveTab} />;
      case "Product2":
        return <ProductDetails1 goTo={setActiveTab} />;
      case "Product3":
        return <ProductDetails2 goTo={setActiveTab} />;
      case "Product4":
        return <ProductDetails3 goTo={setActiveTab} />;
      case "Login":
        return <Login />
      case "Checkout":
        return <Checkout goTo={setActiveTab} />
      case "Confirmation":
        return<OrderConfirmation goTo={setActiveTab}/>
      default:
        return (<View>
          <Text>Page not found</Text>
        </View>);
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
