import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import RootClientTabs from './ClientTabs'
import {colors} from '../global/styles'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}
                options={{
                    title: 'Client',
                    drawerIcon: ({focussed, size}) =>  (
                        <Icon 
                            type = "material-community"
                            name = "home"
                            color = {focussed ? '#7cc' : colors.grey2}
                            size = {size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

const styles = StyleSheet.create({})
