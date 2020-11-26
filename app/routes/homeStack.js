import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Meteorologia",
            headerStyle: {
                backgroundColor: 'steelblue'
            }
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: "",
            headerStyle: {
                backgroundColor: 'steelblue'
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: 'steelblue'
        }
    }
});

export default createAppContainer(HomeStack);