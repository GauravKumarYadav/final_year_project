import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import LoadingScreen from '../screens/LoadingScreen';
import DashboardScreen from '../screens/Dashboard';

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    // LoadingScreen:{screen:LoadingScreen},
    Login:{screen:Login},
    DashboardScreen:{screen:DashboardScreen},
    Register:{screen:Register},
},{
    defaultNavigationsOptions: stackNavigatorOptions
});

export default createAppContainer(AppNavigator);