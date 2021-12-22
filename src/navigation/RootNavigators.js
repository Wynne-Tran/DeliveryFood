import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { NativeScreenContainer } from 'react-native-screens'
import AuthNavigators from './authNavigators'

const RootNavigators = () => {
    return (
        <NavigationContainer>
            <AuthNavigators/>
        </NavigationContainer>
    )
}

export default RootNavigators

const styles = StyleSheet.create({})
