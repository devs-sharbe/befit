import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Container, BackButton, StepText } from './styles';

interface IHeaderStarterProps {
  step: string;
}

export function HeaderStarter({ step }: IHeaderStarterProps) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={navigation.goBack}>
        <Feather
          name="arrow-left"
          size={RFValue(24)}
          color={theme.colors.text}
        />
      </BackButton>

      <StepText>
        {step}
      </StepText>
    </Container>
  );
}
