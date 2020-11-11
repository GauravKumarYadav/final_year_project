import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    // LoadingScreen:{screen:LoadingScreen},
    // Login:{screen:Login},
    DashboardScreen:{screen:HomeScreen},
    // Register:{screen:Register},
},{
    defaultNavigationsOptions: stackNavigatorOptions
});

export default createAppContainer(AppNavigator);