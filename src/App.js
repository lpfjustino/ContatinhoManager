import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import InfoList from './InfoList';

const App = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    InfoList: { screen: InfoList },
});

export default App;
