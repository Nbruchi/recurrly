import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary p-4 text-white"
      >
        Go to Onboarding
      </Link>
      <Link href="/sign-in" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Sign In
      </Link>
      <Link href="/sign-up" className="mt-4 rounded bg-primary p-4 text-white">
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
