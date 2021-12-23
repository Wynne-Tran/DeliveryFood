import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import RootClientTabs from './ClientTabs'
import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen'
import DrawerContent from '../components/DrawerContent'



const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} /> }
        
        >
            <Drawer.Screen 
                name = "RootClientTabs"
                component = {RootClientTabs}
                options={{
                    headerShown: false,
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

            <Drawer.Screen 
                name = "BusinessConsoleScreen"
                component = {BusinessConsoleScreen}
                options={{
                    headerShown: false,
                    title: 'Business console',
                    drawerIcon: ({focussed, size}) =>  (
                        <Icon 
                            type = "material"
                            name = "business"
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
