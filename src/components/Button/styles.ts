import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface IButtonProps {
  active: boolean;
}

export const Container = styled(RectButton)<IButtonProps>`
  width: ${RFValue(231)}px;
  height: ${RFValue(56)}px;
  border-radius: 16px;
  background-color: ${({ active, theme }) => active ?
    theme.colors.secondary_disabled : theme.colors.secondary};
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  color: ${({ theme }) => theme.colors.font};
  text-align: center;
`;
