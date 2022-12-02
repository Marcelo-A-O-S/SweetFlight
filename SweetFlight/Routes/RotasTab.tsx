import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Pages/Home'
import Config from '../Pages/Config';
const Tab = createBottomTabNavigator();

export default function(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Configuracões" component={Config}/>
        </Tab.Navigator>
    )
}