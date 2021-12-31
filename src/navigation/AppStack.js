import React from 'react'
import { StyleSheet} from 'react-native'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import RestaurantMapScreen from '../screens/RestaurantMapScreen'
import DrawerNavigator from './DrawerNavigator'

const AuthStack = createStackNavigator();

const AppStack = () => {
    return (
        <AuthStack.Navigator>

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

            

            
        </AuthStack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})
