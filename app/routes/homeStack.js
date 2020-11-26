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
                backgroundColor: '#5a74db'
            }
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: "",
            headerStyle: {
                backgroundColor: '#5a74db'
            }
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#5a74db'
        }
    }
});

export default createAppContainer(HomeStack);