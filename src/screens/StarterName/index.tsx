import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { HeaderStarter } from '../../components/HeaderStarter';

import { Container, Content, Question, Input } from './styles';

export function StarterName() {
  const [name, setName] = useState('');

  const theme = useTheme();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <HeaderStarter step="1/4" />

        <Content>
          <Question>
            Qual é o seu nome?
          </Question>

          <Input
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            keyboardAppearance="light"
            placeholder="Digite um nome"
            placeholderTextColor={theme.colors.text_light}
            selectionColor={theme.colors.secondary_disabled}
            active={!!name}
          />

          <Button title="Continuar" active={!name} />
        </Content>

      </Container>
    </TouchableWithoutFeedback>
  );
}
