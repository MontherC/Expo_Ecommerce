import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { unloadAllAsync, useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import BottomTabNav from './navigation/BottomTabNav';
import { Cart, Profile, Search, } from './screens';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Quicksand-Regular.ttf'),
    bold: require('./assets/fonts/Quicksand-Bold.ttf'),
    light: require('./assets/fonts/Quicksand-Light.ttf'),
    medium: require('./assets/fonts/Quicksand-Medium.ttf'),
    semibold: require('./assets/fonts/Quicksand-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNav}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: 20,
  }
});
