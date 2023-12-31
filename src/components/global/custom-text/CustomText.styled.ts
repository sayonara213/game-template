import { ICustomTextStyles } from './CustomText.types';

import styled from 'styled-components';

export const CustomTextStyled = {
  Text: styled.p<ICustomTextStyles>`
    font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
    color: ${({ theme, color }) => theme.color[color]};
    font-family: ${({ theme, fontFamily }) => theme.font[fontFamily]};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    text-align: ${({ textAlign }) => textAlign};
  `,
};
