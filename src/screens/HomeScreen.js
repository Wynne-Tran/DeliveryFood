import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import { colors, parameters } from '../global/styles'
import {Icon} from 'react-native-elements'

const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true)

    return (
        <View style={styles.container}>
            <HomeHeader />
                <ScrollView
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator = {true}
                
                >
                    <View>
                        <View style = {{marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <TouchableOpacity
                                onPress={() => {
                                    setDelivery(true)
                                }}
                            
                            >
                                <View style = {{...styles.deliveryButton, backgroundColor : delivery ? colors.buttons : colors.grey4}}>
                                    <Text style = {styles.deliveryText}>Delivery</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setDelivery(false)
                                }}
                            >
                                <View style = {{...styles.deliveryButton, backgroundColor : delivery ? colors.grey4: colors.buttons}}>
                                    <Text style = {styles.deliveryText}>Pick Up</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.filterView}>
                        <View style = {{flexDirection: "row", 
                                            backgroundColor: colors.grey5, 
                                            borderRadius: 15, 
                                            paddingVertical: 3,
                                            justifyContent: "space-between",
                                            }}>
                            <View style={{flexDirection: "row", alignItems:"center", paddingLeft: 10}}>
                                <Icon 
                                    type = "material-community"
                                    name = "map-marker"
                                    color = {colors.grey1}
                                    size = {26}
                                />
                                <Text style={{marginLeft:5}}> 22 Bessie Street</Text>
                            </View>

                            <View style={styles.clockView}>
                                <Icon 
                                    type = "material-community"
                                    name = "clock-time-four"
                                    color = {colors.grey1}
                                    size = {26}
                                />
                                <Text style={{marginLeft:5}}> NOW</Text>
                            </View>
                        </View>

                        <View > 
                            <Icon 
                                type = "material-community"
                                name = "tune"
                                color = {colors.grey1}
                                size = {26}
                                />
                        </View>
                    </View>

                    <View style = {styles.headerTextView}>
                        <Text style = {styles.headerText}>Categories</Text>
                    </View>

                </ScrollView>
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
    
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16,
    },
    filterView: {
        flexDirection: "row", 
        alignItems: "center",
        marginHorizontal: 10, 
        marginVertical: 10,
    },
    clockView: {
        flexDirection: "row", 
        alignItems:"center", 
        marginLeft: 20, 
        backgroundColor: colors.cardbackground,
        paddingHorizontal: 10,
        marginRight: 20,
        borderRadius: 12,

    },
    headerText: {
        color: colors.grey1,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 20,

    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 3,

    }
})
