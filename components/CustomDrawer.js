import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.logoView}>
                <Text style={styles.logo}>Paparazzi</Text>
            </View>
            <DrawerItemList {...props} />
            {/* <DrawerItem
                label="Test"
                activeTintColor="#86DAFC"
                inactiveTintColor="#C1E1EE"
                onPress={() => props.navigation.navigate("Bookmarks")}
                labelStyle={styles.drawerItem}
            /> */}
            {/* <Text>Hello</Text> */}
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    drawerItem: {
        fontFamily: "Raleway_400Regular",
        fontSize: 30,
    },
    logo: {
        // color: "white",
        color: '#86DAFC',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 34,
        textTransform: 'uppercase',
        letterSpacing: 0.25
    },
    logoView: {
        width: "100%",
        minHeight: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
