import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { styled } from 'nativewind';

export const SView = styled(View);
export const SText = styled(Text);

export default function App() {
  return (
  <SView>
    <SText>hi</SText>
    <SText className="text-red-500">hi</SText>
  </SView>
  );
}import React from 'react'
import {}