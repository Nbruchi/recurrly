import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>SignIn</Text>
      <Link href="/sign-up">Create an account</Link>
      <Link href="/" className="mt-4 rounded bg-primary p-4 text-white">
        Go home
      </Link>
    </SafeAreaView>
  );
};

export default SignIn;
