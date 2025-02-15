import React, {forwardRef, ForwardedRef} from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { useStoreActions } from '../../context/hooks';

type InputProp = {
  style?: StyleProp<ViewStyle>;
} & TextInputProps;

const Input = forwardRef(
  ({style, ...rest}: InputProp, ref: ForwardedRef<any>) => {
    return (
      <View>
        <View className="border-[1px] border-primary rounded-xl px-4 py-3.5 mt-2">
          <TextInput ref={ref} {...rest} style={style} />
        </View>
      </View>
    );
  },
);

export default React.memo(Input);
