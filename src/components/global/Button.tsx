import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Text from './Text';

type varientTypes = 'default' | 'transparent';

type ButtonProps = {
  icon?: ReactNode;
  pressed?: boolean;
  text?: string;
  textClasses?: string;
  height?: number;
  onPress: () => void;
  disabled?: boolean | undefined;
  varient?: varientTypes;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = ({
  textClasses,
  icon,
  text,
  pressed,
  onPress,
  disabled,
  height = 60,
  varient = 'default',
  ...props
}) => {
  const _onPress = React.useCallback(() => {
    if (!pressed) {
      onPress();
    }
  }, [pressed, onPress]);

  const buttonVarient: {[key: string]: string} = {
    default: `${disabled ? 'bg-gray2' : 'bg-primary'} rounded-[12px]`,
    transparent: 'rounded-[12px]',
  };

  const textVarient: {[key: string]: string} = {
    default: 'text-white',
    transparent: 'text-primary',
  };

  return (
    <TouchableOpacity
      className={`items-center justify-center px-3 ${buttonVarient[varient]} ${
        pressed && 'opacity-75'
      }`}
      activeOpacity={pressed ? 1 : 0.9}
      style={{height: height}}
      disabled={pressed || disabled}
      onPress={_onPress}
      {...props}>
      <View className="flex-row items-center">
        {text && (
          <View className="flex-row items-center">
            {icon && <View>{icon}</View>}
            <View className="mx-[6px]">
              <Text
                className={`text-callout font-bold ${textClasses} ${textVarient[varient]}`}>
                {text}
              </Text>
            </View>
          </View>
        )}
        {pressed && (
          <ActivityIndicator
            animating={true}
            color={varient === 'default' ? '#ffffff' : '#000000'}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
