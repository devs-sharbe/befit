import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import LogoSvg from '../../assets/logo.svg';

import { Button } from '../../components/Button';

import {
  Container,
  LogoContent,
  PresentationContent,
  Title,
  Description,
  StartButtonContent,
} from './styles';

export function StarterIntro() {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoContent
        from={{
          opacity: 0,
          transform: [{ translateY: -50 }]
        }}
        animate={{
          opacity: 1,
          transform: [{ translateY: 0 }]
        }}
        transition={{
          type: 'timing',
          duration: 500
        }}
      >
        <LogoSvg width={RFValue(272)} height={RFValue(248)} />
      </LogoContent>

      <PresentationContent
        from={{
          opacity: 0,
          transform: [{ translateY: -50 }]
        }}
        animate={{
          opacity: 1,
          transform: [{ translateY: 0 }]
        }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 150
        }}
      >
        <Title>Energize sua vida!</Title>
        <Description>
          Se você quer ser um sucesso na vida, {"\n"}
          precisa estar saudável e em forma.
        </Description>
      </PresentationContent>

      <StartButtonContent
        from={{
          opacity: 0,
          transform: [{ translateY: -50 }]
        }}
        animate={{
          opacity: 1,
          transform: [{ translateY: 0 }]
        }}
        transition={{
          type: 'timing',
          duration: 500,
          delay: 250
        }}
      >
        <Button
          title="Começar agora"
          onPress={() => navigation.navigate('StarterName' as never)}
        />
      </StartButtonContent>
    </Container>
  );
}
