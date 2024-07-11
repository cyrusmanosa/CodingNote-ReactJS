import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text } from 'react-native'
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo"
import LoginFunc from '../components/LoginScreen'

export default function RootLayout() {
  useFonts({
    'outfit': require('./../assets/fonts/PlaywriteCZ-VariableFont_wght.ttf')
  })

  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginFunc />
      </SignedOut>
    </ClerkProvider>
  );
}
