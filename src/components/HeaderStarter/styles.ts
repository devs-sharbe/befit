import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  padding: ${getStatusBarHeight() + 32}px ${RFValue(24)}px ${RFValue(24)}px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)``;

export const StepText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  color: ${({ theme }) => theme.colors.shape};
`;
