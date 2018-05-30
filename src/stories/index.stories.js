import React from 'react';

import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs/react';

const elements = storiesOf('Button', module);

elements.addDecorator(withKnobs);

import Button from "../components/Button";
import {SIZES} from "../constants";



elements.add('Button', () => {
  return <Button>Нажми меня</Button>;
});

elements.add('Disabled button', () => {
  return <Button disabled>Меня не нажмешь</Button>;
});

elements.add('Large button', () => {
  return <Button size={SIZES.large}>Нажми меня</Button>;
});

elements.add('Button link', () => {
  return <Button link href="//google.com" target="_blank">Нажми меня</Button>;
});


