import React, {useState, useEffect} from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../../styles/global'
import ListItem from '../components/ListItem'
import * as Location from 'expo-location'

export default function Home({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);

    useEffect(() => {
      fetch('http://api.openweathermap.org/data/2.5/group?id=2267057,3117735,2968815,2950158,2618425,3169071,2643743,2964574,3067696,2761369&appid=5741efab2d550b7937f8bd2f5a82d482&units=metric&lang=pt')
        .then( result => result.json())
        .then( parsedRes =>{
            console.log(parsedRes)
            setCities(parsedRes.list);
        }).catch((error)=>{
            console.log(error)
        }).finally(() => setLoading(false));
    }, []);

    useEffect(()=>{
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
  
        let location = await Location.getCurrentPositionAsync({});

        let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + location.coords.latitude.toString() + '&lon=' + location.coords.longitude.toString() + '&appid=5741efab2d550b7937f8bd2f5a82d482&units=metric&lang=pt';

        fetch(url)
        .then( result => result.json())
        .then( parsedRes =>{
            setCities(prevCities => [parsedRes,...prevCities]);
        }).catch((error)=>{
            console.log(error)
        }).finally(() => setLoading(false));

      })();
    }, []);

    return (
        <View styles={globalStyles.container}>
            <FlatList
                data={cities}
                renderItem={({item})=>(
                    <ListItem item={item} navigation={navigation}></ListItem>
                )}
                keyExtractor={ (item, index) => index.toString() }/>
        </View>
    )
}
