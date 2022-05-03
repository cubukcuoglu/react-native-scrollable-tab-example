import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

import { ScrollableTab } from "@components";

import styles from "./style";
import Header from "./Header";
import TabBar from "./TabBar";

import Timeline from "../timeline";
import Stories from "../stories";
import Tagged from "../tagged";

const Profile = () =>
    <ScrollableTab.Container style={styles.container}>
        <Header />
        <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
            swipeEnabled={true}
            lazy={false}
            initialRouteName="Timeline">
            <Tab.Screen name="Timeline" component={Timeline} />
            <Tab.Screen name="Stories" component={Stories} />
            <Tab.Screen name="Tagged" component={Tagged} />
        </Tab.Navigator>
    </ScrollableTab.Container >

export { Profile };