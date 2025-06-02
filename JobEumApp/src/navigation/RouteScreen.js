import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';

import SCREENS from '../Screens';
import IMAGES from '../assets/images';
import COLORS from '../constants/colors';

import HomeScreen from '../Screens/tabs/HomeScreen';
import RecommendScreen from '../Screens/tabs/RecommendScreen';
import JobListScreen from '../Screens/tabs/JobListScreen';
import ScrapScreen from '../Screens/tabs/ScrapScreen';
import MyScreen from '../Screens/tabs/MyScreen';
import NotificationScreen from '../Screens/Pages/NotificationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: "right",
                drawerType: "front",
                drawerStyle: { width: '100%' },
            }}>
            <Drawer.Screen name="Main" component={StackNavigation} options={{ headerShown: false }} />
            <Drawer.Screen name={SCREENS.NOTIFICATION} component={NotificationScreen} options={{ headerRight: () => null, }} />
        </Drawer.Navigator>
    );
};

const StackNavigation = ({ navigation }) => {
    return <Stack.Navigator>
        <Stack.Screen
            name="MainTab"
            component={TabNavigator}
            options={{
                headerRight: () => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.NOTIFICATION)}>
                            <Image
                                source={IMAGES.NOTIFICATION}
                                style={styles.iconRight}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 15 }}>
                            <Image
                                source={IMAGES.MENU}
                                style={styles.iconLeft}
                            />
                        </TouchableOpacity>
                    </View>
                ),

            }}
        />
        <Stack.Screen name={SCREENS.NOTIFICATION} component={NotificationScreen} />
    </Stack.Navigator>
};

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName={SCREENS.HOME}>
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    title: '홈',
                    tabBarIcon: ({ focused }) => (
                        <Image source={IMAGES.HOME} style={tabIconStyle(focused)} />
                    ),
                    headerShown: false,
                    ...tabBarStyleOptions,
                }}
            />

            <Tab.Screen
                name={SCREENS.RECOMMEND}
                component={RecommendScreen}
                options={{
                    title: '추천',
                    tabBarIcon: ({ focused }) => (
                        <Image source={IMAGES.RECOMMEND} style={tabIconStyle(focused)} />
                    ),
                    headerShown: false,
                    ...tabBarStyleOptions,
                }}
            />


            <Tab.Screen
                name={SCREENS.JOBLIST}
                component={JobListScreen}
                options={{
                    title: '채용공고',
                    tabBarIcon: ({ focused }) => (
                        <Image source={IMAGES.JOBLIST} style={tabIconStyle(focused)} />
                    ),
                    headerShown: false,
                    ...tabBarStyleOptions,
                }}
            />


            <Tab.Screen
                name={SCREENS.SCRAP}
                component={ScrapScreen}
                options={{
                    title: '모아보기',
                    tabBarIcon: ({ focused }) => (
                        <Image source={IMAGES.SCRAP} style={tabIconStyle(focused)} />
                    ),
                    headerShown: false,
                    ...tabBarStyleOptions,
                }}
            />


            <Tab.Screen
                name={SCREENS.MY}
                component={MyScreen}
                options={{
                    title: 'MY',
                    tabBarIcon: ({ focused }) => (
                        <Image source={IMAGES.MY} style={tabIconStyle(focused)} />
                    ),
                    headerShown: false,
                    ...tabBarStyleOptions,
                }}
            />

        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    iconLeft: {
        width: 25,
        height: 25,
        marginLeft: 15,
    },
    iconRight: {
        width: 25,
        height: 25,
        marginRight: 15,
    },
    searchContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 35,
        justifyContent: 'center',
    },
    searchInput: {
        fontSize: 16,
    },
});

const tabIconStyle = (focused) => ({
    height: 30,
    width: 30,
    tintColor: focused ? COLORS.BLACK : COLORS.GRAY_LIGHT,
});

const tabBarStyleOptions = {
    tabBarActiveTintColor: COLORS.BLACK,
    tabBarInactiveTintColor: COLORS.GRAY_LIGHT,
};


export default DrawerNavigation;