import type { Color, Radius, Size, SpacingStyle } from '@/types/styleTheme';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { styled } from 'styled-components';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacingStyle {
  variant?: 'filled' | 'outlined' | 'text';
  color?: Color;
  size?: Size;
  fullWidth?: boolean;
  radius?: Radius;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  function Button(props, ref) {
    const { children, variant, color, size, fullWidth, radius, ...other } =
      props;
    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        radius={radius}
        {...other}
      >
        {children}
      </ButtonStyled>
    );
  }
);

const ButtonStyled = styled.button<ButtonProps>`
  background-color: gray;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 5px;
  border: none;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export default Button;
