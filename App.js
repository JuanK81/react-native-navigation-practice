import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12213d' },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#4173b4',
        },
        drawerContentStyle: { backgroundColor: '#12213d' },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#ffd000',
        drawerActiveBackgroundColor: '#4173b4',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: '#12213d' },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#4173b4',
            },
          }}
        >

          {/* ************** */}

          {/* <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories Stak',
            }}
          /> */}

          <Stack.Screen
            name="DrawerCategories"
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />

          {/* ************** */}

          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
              headerRight: () => {
                return <Button title="Tap Me!" />;
              },
              title: 'About the Meal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

}

const styles = StyleSheet.create({});
