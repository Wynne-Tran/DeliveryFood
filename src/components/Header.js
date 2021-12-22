import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {colors, parameters} from "../global/styles"
import {Icon} from 'react-native-elements'


const Header = ({title, type, navigation}) => {
    return (
        <View style = {styles.header}>
            <View style = {{marginLeft: 20, marginTop: 5}}>
                <Icon 
                    type = "material-community"
                    name = {type}
                    color = {colors.headerText}
                    size = {28}
                    onPress = {() => {navigation.goBack()}}
                    
                />
                    
            </View>
            <View>
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: 80,
        
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 50,
        marginTop: 5
        
    }
})
