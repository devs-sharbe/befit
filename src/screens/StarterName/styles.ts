import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IInputProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.font};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 ${RFValue(24)}px;
`;

export const Question = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.TextInput<IInputProps>`
  width: 100%;
  margin: ${RFValue(48)}px 0 ${RFValue(32)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ active, theme }) => active ?
    theme.colors.text : theme.colors.shape};
  padding-bottom: ${RFValue(12)}px;

  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  `;
