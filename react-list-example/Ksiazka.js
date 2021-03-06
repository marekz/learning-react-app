import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ListView } from "react-native";

export default class Ksiazka extends Component {
    render() {
        return (
            <View style={styles.ksiazka}>
                <Image style={styles.okladka} source={{ uri: this.props.okladkaURL }} />
                <View style={styles.info}>
                    <Text style={styles.autor}>{this.props.autor}</Text>
                    <Text style={styles.tytul}>{this.props.tytul}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ksiazka: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 2,
        padding: 5,
        height: 175
    },
    okladka: {
        flex: 1,
        height: 150,
        resizeMode: "contain"
    },
    info: {
        flex: 3,
        alignItems: "flex-end",
        flexDirection: "column",
        alignSelf: "center",
        padding: 20
    },
    autor: { fontSize: 18 },
    tytul: { fontSize: 18, fontWeight: "bold" }
});
