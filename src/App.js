import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen from './views/HomeScreen';
import InfoList from './views/InfoList';

const App = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    InfoList: { screen: InfoList },
});

export default App;
