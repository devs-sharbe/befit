import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface IButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function Button({ title, active = false, ...rest }: IButtonProps) {
  return (
    <Container
      active={active}
      enabled={!active}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
