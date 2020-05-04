import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withLoading from '../05/withLoading';
import withHoC from '../05/withHoC';

const ButtonWithLoading = withLoading(<Button disabled>is loading...</Button>)(Button);
const TextWithLoading = withLoading('is loading...')(Text);

const ButtonWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithLoading', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithLoading>안녕하세요</ButtonWithLoading>
      <TextWithLoading>안녕하세요</TextWithLoading>
    </div>
  ))
  .addWithJSX('is loading 예제', () => (
    <div>
      <ButtonWithLoading isLoading>안녕하세요</ButtonWithLoading>
      <br></br>
      <TextWithLoading isLoading>안녕하세요</TextWithLoading>
    </div>
  ));
