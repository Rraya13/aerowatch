/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {Platform} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStoreState} from '../../context/hooks';

type SafeAreaProps = PropsWithChildren<{
  bottom?: boolean;
  flex?: number;
  safeAreaClass?: string;
  bgColor?: boolean;
}>;

const SafeArea: React.FC<SafeAreaProps> = ({
  children,
  flex = 1,
  bottom,
  safeAreaClass,
  bgColor = true,
}) => {
  const apptheme = useStoreState(state => state.home.apptheme);

  return (
    <SafeAreaView
      className={`flex-${flex} ${safeAreaClass} ${
        bgColor ? (apptheme === 'dark' ? 'bg-darkBg' : 'bg-lightBg') : ''
      } `}
      style={{
        paddingTop: Platform.OS === 'android' ? 10 : 24,
        paddingBottom: bottom && Platform.OS === 'android' ? 10 : undefined,
      }}
      edges={
        bottom ? ['top', 'right', 'left', 'bottom'] : ['top', 'right', 'left']
      }>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
