import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  AsyncStorage,
  ScrollView
} from "react-native";

import logo from "../assets/logo.png";
import SpotList from "../components/SpotList";

export default function List() {
  const [techs, setTechs] = useState([]);
  const tests = ["reactjs", "react", "node", "php"];

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storageTechs => {
      if (storageTechs) {
        const techsArray = storageTechs.split(",").map(tech => tech.trim());

        setTechs(techsArray);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <ScrollView>
        {tests.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10
  }
});
