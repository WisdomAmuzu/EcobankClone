import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./homescreen/components/Header";
import { Activity } from "./homescreen/components/Activity";
import { MainMenu } from "./homescreen/components/MainMenu";
import { TabMenu } from "./homescreen/components/TabMenu";

const Home = () => {
  return (
    <View>
        <Header />
        <Activity />
        <MainMenu />
        <TabMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default Home;
