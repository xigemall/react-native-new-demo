import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import User from '../pages/User';
import {Icon} from 'react-native-elements';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return (
                            <Icon name="rowing" color={color} size={size}/>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return (
                            <Icon name="android" color={color} size={size}/>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}
