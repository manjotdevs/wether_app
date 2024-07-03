import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { styled } from "nativewind";

export const SView = styled(View);
export const SText = styled(Text);
export const SSafeAreaView = styled(SafeAreaView);

export default function App() {
  return (
    <SSafeAreaView className="bg-blue-600 h-full ">
      <SView className="bg-blue-600 ">
        <SText>hi</SText>
        <SText className="bg-red-500">hi</SText>
      </SView>
    </SSafeAreaView>
  );
}
