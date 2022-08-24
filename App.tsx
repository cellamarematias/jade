import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { NavigationContainer, DefaultTheme, Theme  } from '@react-navigation/native';
import NavBar from './src/components/navbar/BottomTab';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <StatusBar style='light' />
        <NavigationContainer theme={MyTheme}>
          <NavBar />
        </NavigationContainer>
      </>
    );
  }
}

const MyTheme = {
  dark: false,
  colors: {
    primary: '#white',
    background: 'white',
    card: '#2a1b5a',
    text: '#CAF99B',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)'
    },
};
