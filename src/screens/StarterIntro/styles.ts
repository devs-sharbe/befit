import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MotiView } from 'moti';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 ${RFValue(24)}px;
`;

export const LogoContent = styled(MotiView)``;

export const PresentationContent = styled(MotiView)`
  margin-top: ${RFValue(32)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  color: ${({ theme }) => theme.colors.font};
  line-height: ${RFValue(18)}px;
  text-align: center;
  margin-top: 4px;
`;

export const StartButtonContent = styled(MotiView)`
  margin-top: ${RFValue(48)}px;
`;

