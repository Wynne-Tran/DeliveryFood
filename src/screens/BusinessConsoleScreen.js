import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, 
    ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native'
import { colors, parameters } from '../global/styles'
import {Icon} from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'

const BusinessConsoleScreen = () => {
    return (
        <View style = {styles.container}>
            <Text>Welcome to Business console</Text>
        </View>
    )
}

export default BusinessConsoleScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
