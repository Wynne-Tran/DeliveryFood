import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {colors, parameters } from '../global/styles'
import {Icon, withBadge} from 'react-native-elements'
const HomeHeader = () => {
    const BadgeIcon = withBadge(0)(Icon)
    return (
        <View style={styles.header}>
            <View style = {{alignItems : "center", justifyContent:'center', marginLeft: 15}}>
                <Icon
                    type = "material-community"
                    name = 'menu'
                    color = {colors.cardbackground}
                    size = {32}
                />
            </View>

            <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: colors.cardbackground, fontSize: 25, fontWeight: 'bold'}}>Xpress Food</Text>
            </View>

            <View style = {{alignItems: 'center', justifyContent: 'center', marginRight: 15}}>
                <BadgeIcon 
                    type = "material-community"
                    name = "cart"
                    size = {35}
                    color = {colors.cardbackground}
                
                />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        paddingTop: 25,
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: 80,
        justifyContent: 'space-between',
    }
})
