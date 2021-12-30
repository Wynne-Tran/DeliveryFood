import React from 'react'
import { StyleSheet} from 'react-native'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import RestaurantMapScreen from '../screens/RestaurantMapScreen'
import DrawerNavigator from './DrawerNavigator'
import SignUpScreen from '../screens/authScreens/SignUpScreen'
import SignInWelcome from '../screens/authScreens/SignInWelcome'
import SignInScreen from '../screens/authScreens/SignInScreen'

const AuthStack = createStackNavigator();

const AppStack = () => {
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
                name = "App"
                component = {DrawerNavigator}
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

            <AuthStack.Screen 
                name = "SignUpScreen"
                component = {SignUpScreen}
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
        </AuthStack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
