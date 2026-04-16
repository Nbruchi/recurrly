import { useClerk } from "@clerk/expo";
import { styled } from "nativewind";
import { Pressable, Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  const { signOut } = useClerk();

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>Settings</Text>
      <Pressable className="auth-button mt-5" onPress={() => signOut()}>
        <Text className="auth-button-text">Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Settings;
