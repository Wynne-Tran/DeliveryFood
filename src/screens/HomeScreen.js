import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, 
    ScrollView, FlatList, Pressable, Image } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import { colors, parameters } from '../global/styles'
import {Icon} from 'react-native-elements'
import {filterData} from '../global/Data'


const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

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

                        <View style={{marginRight: 15}}> 
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

                    <View>
                        <FlatList 
                            horizontal = {true}
                            showsHorizontalScrollIndicator = {false}
                            data = {filterData}
                            keyExtractor={(item) =>  item.id}
                            extraData={indexCheck}
                            renderItem={({item, index}) =>  (
                                <Pressable
                                    onPress={() => {setIndexCheck(item.id)}}
                                >
                                    <View style = {indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                        <Image 
                                            style = {{height:60, width:60, borderRadius: 30}}
                                            source = {item.image}
                                        />
                                        <View>
                                            <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected} : 
                                            {...styles.smallCardText}}>{item.name}</Text>
                                        </View>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>

                    <View style = {styles.headerTextView}>
                        <Text style = {styles.headerText}>Free Delivery Now</Text>
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
        alignItems: 'center',
        marginHorizontal: 10, 
        marginVertical: 10,
        justifyContent: 'space-evenly',
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

    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100

    },

    smallCardSelected:{
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },

    smallCardTextSelected:{
        fontWeight: "bold",
        color: colors.cardbackground,
    },
    smallCardText:{
        fontWeight: "bold",
        color: colors.grey1,
    }
})
