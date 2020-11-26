import React from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'

export default function Detail({navigation}) {
    const cityWeatherData = navigation.state.params;

    console.log(cityWeatherData);
    return (
        <View>
            <View style={styles.firstContainer}>
                {cityWeatherData.weather[0].main === "Clouds" &&
                        <Image style={styles.weatherImage} source={require('../assets/images/clouds.svg')}/>
                    }
                    {cityWeatherData.weather[0].main === 'Clear' &&
                        <Image style={styles.weatherImage} source={require('../assets/images/sun.svg')}/>
                    }
                    {cityWeatherData.weather[0].main === 'Rain' &&
                        <Image style={styles.weatherImage} source={require('../assets/images/rain.svg')}/>
                    }
                <Text style={styles.cityNameText}>{cityWeatherData.name}</Text>
                <Text style={styles.temperatureText}>{cityWeatherData.main.temp}ºC</Text>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.secondaryText}>Temperatura Máx: {cityWeatherData.main.temp_min}ºC</Text>
                <Text style={styles.secondaryText}>Temperatura Mín: {cityWeatherData.main.temp_max}ºC</Text>
                <Text style={styles.secondaryText}>Humidade: {cityWeatherData.main.humidity}%</Text>
                <Text style={styles.secondaryText}>Veloc. do Vento: {cityWeatherData.wind.speed}km/h</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    firstContainer: {
        alignItems: "center",
        marginBottom: 10
    },
    cityNameText:{
        fontSize: 35,
        textTransform: "uppercase"
    },
    temperatureText:{
        fontSize: 70,
        fontWeight: 'bold'
    },
    weatherImage: {
        height: 250,
        width: 250,
        margin: 20
    },
    secondContainer:{
        margin: 20,
        paddingTop: 5
    },
    secondaryText:{
        fontSize: 25,
        margin: 5
    }
})