import type { Color, Radius, Size, SpacingStyle } from '@/types/styleTheme';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { styled, css } from 'styled-components';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacingStyle {
  variant?: 'filled' | 'outlined' | 'text';
  color: Color;
  size?: Size;
  fullWidth?: boolean;
  radius?: Radius;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  function Button(props, ref) {
    const {
      children,
      variant,
      color = 'gray',
      size,
      fullWidth,
      radius,
      startIcon,
      endIcon,
      ...other
    } = props;
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
        {startIcon}
        {children}
        {endIcon}
      </ButtonStyled>
    );
  }
);
const sizeStyles = css`
  ${(props) =>
    props.size === 'xlarge' &&
    css`
      padding: 15px 35px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 10px 20px;
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      padding: 6px 10px;
    `}
`;

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${(props) => props.color};
  border-radius: ${(props) => `${props.radius}px`};
  color: white;
  padding: 6px 10px;
  margin: ${(props) =>
    `${props.mt}px ${props.mr}px ${props.ml}px ${props.mb}px`};
  padding: ${(props) =>
    `${props.pt}px ${props.pr}px ${props.pl}px ${props.pb}px`};
  border: none;
  opacity: 0.7;
  display: flex;
  gap: 3px;
  ${sizeStyles}
  &:hover {
    opacity: 1;
  }
`;

export default Button;
