import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, 
    ScrollView, FlatList, Pressable, Image, Dimensions, StatusBar } from 'react-native'
import HomeHeader from '../components/HomeHeader'
import { colors, parameters } from '../global/styles'
import {Icon} from 'react-native-elements'
import {filterData, restaurantsData} from '../global/Data'
import Foodcard from '../components/Foodcard'
import Countdown from 'react-native-countdown-component'



const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = ({navigation}) => {
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

    return (
        <View style={styles.container}>
            <StatusBar 
                translucent
                barStyle='light-content'
                backgroundColor="rgba(255, 140, 82, 1)"
            />

            <HomeHeader  navigation={navigation}/>
                <ScrollView
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator = {true}
                
                >
                    <View style = {{backgroundColor: colors.cardbackground, paddingBottom: 10}}>
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
                                    navigation.navigate("RestaurantMapScreen")
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

                    <View>
                        <View style = {{flexDirection: 'row'}}>
                                <Text style={{marginLeft: 15, fontSize: 16, marginTop: 10, marginRight: 5}}>Options changing in</Text>
                                <Countdown 
                                    style ={{marginTop: 10}}
                                    until = {3600}
                                    size = {14}
                                    digitStyle = {{backgroundColor: colors.lightgreen}}
                                    digitTxtStyle = {{color: colors.cardbackground}}
                                    timeToShow={['M', 'S']}
                                    timeLabels={{m:'Min', s:'Sec'}}
                                />
                        </View>

                        <FlatList 
                            style = {{marginTop: 10, marginBottom: 10}}
                            horizontal = {true}
                            data = {restaurantsData}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator = {false}
                            renderItem = {({item}) => (
                                <View>
                                    <Foodcard 
                                        screenWidth={SCREEN_WIDTH*0.8}
                                        images = {item.images}
                                        restaurantName={item.restaurantName}
                                        farAway= {item.farAway}
                                        businessAddress={ item.businessAddress}
                                        averageReview={item.averageReview}
                                        numberOfReview={ item.numberOfReview}
                                    />
                                </View>
                            )}
                        />
                    </View>


                    <View style = {styles.headerTextView}>
                        <Text style = {styles.headerText}>Promotions Available</Text>
                    </View>

                    <View>
                        <FlatList 
                            style = {{marginTop: 10, marginBottom: 10}}
                            horizontal = {true}
                            data = {restaurantsData}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator = {false}
                            renderItem = {({item}) => (
                                <View>
                                    <Foodcard 
                                        screenWidth={SCREEN_WIDTH*0.8}
                                        images = {item.images}
                                        restaurantName={item.restaurantName}
                                        farAway= {item.farAway}
                                        businessAddress={ item.businessAddress}
                                        averageReview={item.averageReview}
                                        numberOfReview={ item.numberOfReview}
                                    />
                                </View>
                            )}
                        />
                    </View>

                    <View style = {styles.headerTextView}>
                        <Text style = {styles.headerText}>Restaurants in your area</Text>
                    </View>
                    
                    <View style = {{width: SCREEN_WIDTH, paddingTop: 10}}>
                        {
                            
                            restaurantsData.map(item => (
                                <View key = {item.id} style = {{paddingBottom: 20}}>
                                    <Foodcard 
                                        screenWidth={SCREEN_WIDTH*0.95}
                                        images = {item.images}
                                        restaurantName={item.restaurantName}
                                        farAway= {item.farAway}
                                        businessAddress={ item.businessAddress}
                                        averageReview={item.averageReview}
                                        numberOfReview={ item.numberOfReview}
                                    />
                                </View>
                            ))
                        }
                    </View>

                </ScrollView>

                { // this code: map just show on HOMESCEEN, click PICKUP, map will disappear
                delivery &&
                    <View style = {styles.floatingButton}>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('RestaurantMapScreen')}}
                    >
                        <Icon 
                            name="place"
                            type = "material"
                            size = {32}
                            color = {colors.buttons}
                        />
                        <Text style = {{color: colors.grey2}}>Map</Text>
                    </TouchableOpacity>
                    </View>
                    
                }
            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 1
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
    },
    floatingButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center'
    }
})
