import React, {PropsWithChildren} from 'react';
import {StyleProp, Text as RNText, TextProps} from 'react-native';
import {useStoreState} from '../../context/hooks';

type RNTextProps = {
  className?: string;
  style?: StyleProp<any>;
} & PropsWithChildren &
  TextProps;

const Text: React.FC<RNTextProps> = ({
  className,
  children,
  style,
  ...props
}) => {
  const apptheme = useStoreState(state => state.home.apptheme);

  return (
    <RNText
      className={` ${
        apptheme === 'light' ? 'text-black' : 'text-white'
      } ${className}`}
      style={[style]}
      allowFontScaling={false}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;
