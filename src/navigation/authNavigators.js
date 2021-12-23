import React from 'react'
import { StyleSheet} from 'react-native'
import {createNativeStackNavigator, createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SignInWelcome from '../screens/authScreens/SignInWelcome'
import SignInScreen from '../screens/authScreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'
import RootClientTabs from './ClientTabs'
import RestaurantMapScreen from '../screens/RestaurantMapScreen'

const AuthStack = createStackNavigator();

const AuthNavigators = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name = "SignInWelcomeScreen"
                component = {SignInWelcome}
                options = {{

                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid               
                }}
            />

            <AuthStack.Screen 
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{

                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid               
                }}
            />

            <AuthStack.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{

                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid               
                }}
            />

            <AuthStack.Screen 
                name = "RestaurantMapScreen"
                component = {RestaurantMapScreen}
                options = {{

                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid               
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigators

const styles = StyleSheet.create({})
