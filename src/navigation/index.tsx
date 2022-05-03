import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";

DefaultTheme.colors.background = "white";

enableScreens();

import { Profile } from "@screens";

import { navigationRef } from "@utils";

const Stack = createStackNavigator();

const StackNavigator = () =>
    <Stack.Navigator
        headerMode="none"
        initialRouteName="Profile"
        screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
        }}>
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>

const Navigator = () =>
    <NavigationContainer ref={navigationRef}>
        <StackNavigator />
    </NavigationContainer>

export default Navigator;