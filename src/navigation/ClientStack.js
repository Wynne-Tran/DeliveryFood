import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPreset } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from '../screens/SearchResultScreen'

const ClientSearch = createStackNavigator()

const ClientStack = () => {
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen 
                name = "ClientStack"
                component = {SearchScreen}
                options = {
                    () => ({
                        headerShown: false,
                    })
                }
            />

            <ClientSearch.Screen 
                name = "SearchResultScreen"
                component = {SearchResultScreen}
                options = {
                    () => ({
                        headerShown: false,
                    })
                }
            />
        </ClientSearch.Navigator>
    )
}

export default ClientStack

const styles = StyleSheet.create({})
