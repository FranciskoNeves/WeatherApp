import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const ListItem = ({navigation,item}) =>{

    return (
        <TouchableOpacity style={listItemStyles.container}  onPress={()=> navigation.navigate('Detail', item)}>
            <View style={listItemStyles.viewCity}>
                <Text style={listItemStyles.itemText}>{item.name}</Text>
            </View>
            <View style={listItemStyles.viewWeather}>
                {item.weather[0].main === "Clouds" &&
                    <Image style={listItemStyles.weatherImage} source={require('../assets/images/clouds.svg')}/>
                }
                {item.weather[0].main === 'Clear' &&
                    <Image style={listItemStyles.weatherImage} source={require('../assets/images/sun.svg')}/>
                }
                {item.weather[0].main === 'Rain' &&
                    <Image style={listItemStyles.weatherImage} source={require('../assets/images/rain.svg')}/>
                }
                <Text style={listItemStyles.temperatureText}>{item.main.temp}ºC</Text>
            </View>
        </TouchableOpacity>
    )
}

const listItemStyles = StyleSheet.create({
    container: {
        margin: 8,
        height:100,
        backgroundColor:'white',
        flexDirection: 'row'
    },
    viewCity:{
        flex: '1',
        paddingLeft: 20,
        justifyContent: 'center'
    },
    viewWeather:{
        flex:'1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText:{
        color: 'green',
        fontSize: 27

    },
    weatherImage:{
        height: 50,
        width: 50
    },
    temperatureText:{
        fontSize: 15
    }
})

export default ListItem;