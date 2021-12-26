import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPreset } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from '../screens/SearchResultScreen'
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import MenuProductScreen from '../screens/MenuProductScreen'


const ClientSearch = createStackNavigator()

const ClientStack = ({navigation, route}) => {

    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "RestaurantHomeScreen" || "MenuProductScreen"){
            navigation.setOptions({tabBarVisible:false})
        }
        else{
            navigation.setOptions({tabBarVisible:true})
        }
    }, [navigation, route])
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

            <ClientSearch.Screen 
                name = "RestaurantHomeScreen"
                component = {RestaurantHomeScreen}
                options = {
                    () => ({
                        headerShown: false,
                    })
                }
            />

            <ClientSearch.Screen 
                name = "MenuProductScreen"
                component = {MenuProductScreen}
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
