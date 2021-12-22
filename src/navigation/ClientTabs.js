import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Icon} from 'react-native-elements'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { colors } from '../global/styles';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';



const ClientTabsNav = createBottomTabNavigator();

const ClientTabs = () => {
    return (
        <ClientTabsNav.Navigator
            tabBarOptions = {{
                activeTintColor: colors.buttons
            }}
        >
            <ClientTabsNav.Screen 
                name = "HomeScreen"
                component = {HomeScreen}
                
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "Home",
                        tabBarIcon: ({color, size}) => (
                            <Icon 
                                name = "home"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }

            />

            < ClientTabsNav.Screen 
                name = "MyOrdersScreen"
                component = {MyOrdersScreen}
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color, size}) => (
                            <Icon 
                                name = "view-list"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />

            < ClientTabsNav.Screen 
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "Search",
                        tabBarIcon: ({color, size}) => (
                            <Icon 
                                name = "search"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }

            />


            < ClientTabsNav.Screen 
                name = "MyAccount"
                component = {MyAccountScreen}
                options = {
                    {
                        headerShown: false,
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color, size}) => (
                            <Icon 
                                name = "person"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />


        </ClientTabsNav.Navigator>
    )
}

export default ClientTabs

const styles = StyleSheet.create({})
