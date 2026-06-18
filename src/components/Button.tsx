import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS } from "../constants/Colors";

type BottomTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function BottomTabs({ activeTab, setActiveTab }: BottomTabsProps) {
  const tabs = [
    { name: "Home", icon: require("../../assets/icons8-home-32.png") },
    { name: "Categories", icon: require("../../assets/icons8-menu-100.png") },
    { name: "Cart", icon: require("../../assets/icons8-shopping-cart-100.png") },
    { name: "Profile", icon: require("../../assets/icons8-customer-32.png") },
  ];

  return (
    <View style={style.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={[style.tabItem, activeTab === tab.name && style.activeTab]}
          onPress={() => setActiveTab(tab.name)}
        >
          <Image source={tab.icon} style={style.icon} resizeMode="contain" />
          <Text style={[style.label, activeTab === tab.name && style.activeLabel]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 5,
  },
  activeTab: {
    backgroundColor: "#e6f0ff",
    borderRadius: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: "#555",
  },
  activeLabel: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
